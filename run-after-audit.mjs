import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:5173';
const AFTER_DIR = path.resolve('./audit-screenshots/after');
fs.mkdirSync(AFTER_DIR, { recursive: true });

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

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, isMobile: false },
  { name: 'tablet', width: 768, height: 1024, isMobile: true },
  { name: 'mobile', width: 375, height: 812, isMobile: true }
];

async function run() {
  console.log('Running Post-Remediation Verification Audit...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const results = {
    timestamp: new Date().toISOString(),
    routesVerified: [],
    seoResults: [],
    interactivePassed: []
  };

  for (const r of ROUTES) {
    console.log(`Checking ${r.name}...`);
    for (const vp of VIEWPORTS) {
      await page.setViewport({ width: vp.width, height: vp.height, isMobile: vp.isMobile });
      await page.goto(`${BASE_URL}${r.path}`, { waitUntil: 'networkidle2' });
      await new Promise(res => setTimeout(res, 400));
      await page.screenshot({ path: path.join(AFTER_DIR, `${r.name}_${vp.name}.png`) });
    }

    // Capture title & meta on desktop
    await page.setViewport({ width: 1440, height: 900 });
    const seo = await page.evaluate(() => ({
      title: document.title,
      metaDesc: document.querySelector('meta[name="description"]')?.content
    }));
    results.seoResults.push({ route: r.name, seo });
  }

  // Verify modal on Desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
  const bookBtn = await page.$('button[class*="bg-[#FDB813]"]');
  if (bookBtn) {
    await bookBtn.click();
    await new Promise(res => setTimeout(res, 500));
    await page.screenshot({ path: path.join(AFTER_DIR, 'modal_desktop_after.png') });
    results.interactivePassed.push('Site Visit Modal verified');
  }

  // Verify contact form inputs have name/id
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle2' });
  const formCheck = await page.evaluate(() => {
    const inputs = Array.from(document.querySelectorAll('form input, form select')).map(i => ({
      id: i.id,
      name: i.name,
      autoComplete: i.getAttribute('autocomplete')
    }));
    return inputs;
  });
  results.contactFormInputs = formCheck;

  fs.writeFileSync(path.resolve('./audit-screenshots/after-report.json'), JSON.stringify(results, null, 2));
  console.log('Post-remediation audit complete!');
  await browser.close();
}

run().catch(console.error);
