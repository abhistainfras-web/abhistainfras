import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:5173';
const LIVE_URL = 'https://www.abhistainfras.in';

const SCREENSHOT_DIR = path.resolve('./audit-screenshots/before');
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, isMobile: false },
  { name: 'tablet', width: 768, height: 1024, isMobile: true },
  { name: 'mobile', width: 375, height: 812, isMobile: true }
];

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
  { name: 'ongoing_projects', path: '/ongoing-projects' },
  { name: 'completed_projects', path: '/completed-projects' },
  { name: 'project_arrjava', path: '/projects/abhista-01' },
  { name: 'project_orchid', path: '/projects/abhista-02' },
  { name: 'corridors', path: '/corridors' },
  { name: 'interactive_studio', path: '/interactive-studio' },
  { name: 'about', path: '/about' },
  { name: 'history', path: '/history' },
  { name: 'sustainability', path: '/sustainability' },
  { name: 'calculator', path: '/calculator' },
  { name: 'investor_relations', path: '/investor-relations' },
  { name: 'careers', path: '/careers' },
  { name: 'contact', path: '/contact' }
];

async function run() {
  console.log('Starting comprehensive browser audit...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const auditReport = {
    timestamp: new Date().toISOString(),
    routesChecked: [],
    consoleErrors: [],
    brokenImages: [],
    overflowIssues: [],
    linkAudit: [],
    seoAudit: [],
    interactiveTests: []
  };

  const page = await browser.newPage();

  // Monitor console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      auditReport.consoleErrors.push({ text: msg.text(), location: msg.location() });
    }
  });

  page.on('pageerror', error => {
    auditReport.consoleErrors.push({ text: error.message, stack: error.stack });
  });

  for (const r of ROUTES) {
    console.log(`\nAuditing route: ${r.name} (${r.path})`);
    const routeInfo = { name: r.name, path: r.path, viewports: {} };

    for (const vp of VIEWPORTS) {
      await page.setViewport({
        width: vp.width,
        height: vp.height,
        isMobile: vp.isMobile,
        hasTouch: vp.isMobile
      });

      const url = `${BASE_URL}${r.path}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });
        // Allow animations to settle
        await new Promise(res => setTimeout(res, 800));

        // Check for horizontal overflow
        const overflow = await page.evaluate(() => {
          const docWidth = document.documentElement.scrollWidth;
          const winWidth = window.innerWidth;
          const bodyWidth = document.body.scrollWidth;
          const elements = [];
          if (docWidth > winWidth || bodyWidth > winWidth) {
            document.querySelectorAll('*').forEach(el => {
              const rect = el.getBoundingClientRect();
              if (rect.right > winWidth + 1) {
                elements.push({
                  tag: el.tagName,
                  class: el.className?.toString().slice(0, 100),
                  rect: { right: rect.right, width: rect.width }
                });
              }
            });
          }
          return {
            hasOverflow: docWidth > winWidth || bodyWidth > winWidth,
            docWidth,
            winWidth,
            bodyWidth,
            overflowElements: elements.slice(0, 5)
          };
        });

        if (overflow.hasOverflow) {
          auditReport.overflowIssues.push({
            route: r.name,
            viewport: vp.name,
            details: overflow
          });
        }

        // Check for broken images
        const images = await page.evaluate(() => {
          const imgs = Array.from(document.querySelectorAll('img'));
          return imgs.map(img => ({
            src: img.src,
            alt: img.alt,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            complete: img.complete,
            isBroken: img.complete && img.naturalWidth === 0
          })).filter(i => i.isBroken || !i.alt);
        });

        if (images.length > 0) {
          auditReport.brokenImages.push({
            route: r.name,
            viewport: vp.name,
            issues: images
          });
        }

        // Take viewport screenshot
        const screenshotPath = path.join(SCREENSHOT_DIR, `${r.name}_${vp.name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: false });
        routeInfo.viewports[vp.name] = {
          screenshot: screenshotPath,
          overflow: overflow.hasOverflow
        };

      } catch (err) {
        console.error(`Error loading ${url} at ${vp.name}:`, err.message);
        routeInfo.viewports[vp.name] = { error: err.message };
      }
    }

    // Perform SEO audit on desktop viewport
    await page.setViewport({ width: 1440, height: 900 });
    const seo = await page.evaluate(() => {
      const title = document.title;
      const metaDesc = document.querySelector('meta[name="description"]')?.content;
      const canonical = document.querySelector('link[rel="canonical"]')?.href;
      const ogTitle = document.querySelector('meta[property="og:title"]')?.content;
      const ogImage = document.querySelector('meta[property="og:image"]')?.content;
      const h1s = Array.from(document.querySelectorAll('h1')).map(h => h.innerText.trim());
      const h2Count = document.querySelectorAll('h2').length;
      return { title, metaDesc, canonical, ogTitle, ogImage, h1s, h2Count };
    });
    auditReport.seoAudit.push({ route: r.name, seo });

    // Link audit on desktop
    const links = await page.evaluate(() => {
      const allLinks = Array.from(document.querySelectorAll('a'));
      return allLinks.map(a => ({
        text: a.innerText.trim().slice(0, 40),
        href: a.getAttribute('href'),
        target: a.getAttribute('target'),
        rel: a.getAttribute('rel')
      })).filter(l => l.href);
    });
    routeInfo.linksCount = links.length;
    auditReport.routesChecked.push(routeInfo);
  }

  // Interactive Testing: Modals, WhatsApp, Forms, Tabs
  console.log('\nTesting Interactive Components & CTAs...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });

  // 1. Test Site Visit Modal
  const visitBtn = await page.$('header button');
  let modalOpened = false;
  try {
    const bookButtons = await page.$$('button');
    for (const b of bookButtons) {
      const text = await (await b.getProperty('innerText')).jsonValue();
      if (text.includes('Site Visit') || text.includes('Visit')) {
        await b.click();
        await new Promise(res => setTimeout(res, 500));
        modalOpened = await page.evaluate(() => {
          return document.querySelector('form') !== null || document.body.innerText.includes('Book') || document.body.innerText.includes('Site Visit');
        });
        if (modalOpened) {
          const modalShot = path.join(SCREENSHOT_DIR, 'modal_site_visit.png');
          await page.screenshot({ path: modalShot });
          break;
        }
      }
    }
  } catch (e) {
    console.error('Modal click error:', e.message);
  }
  auditReport.interactiveTests.push({ test: 'Site Visit Modal Trigger', passed: modalOpened });

  // 2. Test Interactive Studio Tools on /interactive-studio
  await page.goto(`${BASE_URL}/interactive-studio`, { waitUntil: 'networkidle2' });
  const studioToolTests = [];
  const studioTabs = ['Plot Selector', 'Vaastu Compass', 'Drive Times', 'Agro Calculator', 'Venture Finder', 'Aerial Tour'];
  for (const toolName of studioTabs) {
    try {
      const buttons = await page.$$('button');
      let clicked = false;
      for (const btn of buttons) {
        const text = await (await btn.getProperty('innerText')).jsonValue();
        if (text.includes(toolName)) {
          await btn.click();
          await new Promise(res => setTimeout(res, 400));
          clicked = true;
          break;
        }
      }
      studioToolTests.push({ tool: toolName, clicked });
    } catch (e) {
      studioToolTests.push({ tool: toolName, clicked: false, error: e.message });
    }
  }
  auditReport.interactiveTests.push({ test: 'Interactive Studio Tabs', details: studioToolTests });

  // 3. Test Contact / Enquiry form on /contact
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle2' });
  const contactFormTest = await page.evaluate(() => {
    const form = document.querySelector('form');
    const inputs = Array.from(document.querySelectorAll('input, textarea')).map(i => ({
      name: i.name,
      type: i.type,
      placeholder: i.placeholder,
      required: i.required
    }));
    return { hasForm: !!form, inputs };
  });
  auditReport.interactiveTests.push({ test: 'Contact Form Audit', details: contactFormTest });

  // 4. Test WhatsApp & Phone links
  const contactLinks = await page.evaluate(() => {
    const wa = Array.from(document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]')).map(a => a.href);
    const tel = Array.from(document.querySelectorAll('a[href^="tel:"]')).map(a => a.href);
    const mail = Array.from(document.querySelectorAll('a[href^="mailto:"]')).map(a => a.href);
    return { whatsappLinks: wa, telLinks: tel, mailtoLinks: mail };
  });
  auditReport.linkAudit = contactLinks;

  // Save report JSON
  const reportPath = path.resolve('./audit-screenshots/audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(auditReport, null, 2));
  console.log(`\nAudit completed successfully! Report written to ${reportPath}`);

  await browser.close();
}

run().catch(err => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});
