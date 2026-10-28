import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:5173';
const FULL_DIR = path.resolve('./audit-screenshots/before_full');
fs.mkdirSync(FULL_DIR, { recursive: true });

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
  { name: 'ongoing_projects', path: '/ongoing-projects' },
  { name: 'completed_projects', path: '/completed-projects' },
  { name: 'project_arrjava', path: '/projects/abhista-01' },
  { name: 'corridors', path: '/corridors' },
  { name: 'interactive_studio', path: '/interactive-studio' },
  { name: 'about', path: '/about' },
  { name: 'history', path: '/history' },
  { name: 'calculator', path: '/calculator' },
  { name: 'contact', path: '/contact' }
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Test full page on Desktop
  for (const r of ROUTES) {
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}${r.path}`, { waitUntil: 'networkidle2' });
    await new Promise(res => setTimeout(res, 600));
    await page.screenshot({
      path: path.join(FULL_DIR, `${r.name}_desktop_full.png`),
      fullPage: true
    });

    // Mobile full page
    await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
    await page.goto(`${BASE_URL}${r.path}`, { waitUntil: 'networkidle2' });
    await new Promise(res => setTimeout(res, 600));
    await page.screenshot({
      path: path.join(FULL_DIR, `${r.name}_mobile_full.png`),
      fullPage: true
    });
    console.log(`Captured fullpage for ${r.name}`);
  }

  // Now test Site Visit modal trigger specifically
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
  const visitBtn = await page.$('button[class*="bg-[#FDB813]"]');
  if (visitBtn) {
    await visitBtn.click();
    await new Promise(res => setTimeout(res, 500));
    await page.screenshot({ path: path.join(FULL_DIR, 'modal_desktop.png') });
    console.log('Site Visit Modal successfully triggered and captured!');
  }

  // Now test CAD Layout Modal trigger
  const cadBtn = await page.$('button:has-text("View CAD"), button:has-text("CAD")');
  if (cadBtn) {
    await cadBtn.click();
    await new Promise(res => setTimeout(res, 500));
    await page.screenshot({ path: path.join(FULL_DIR, 'cad_modal.png') });
  }

  await browser.close();
  console.log('Full-page audit capture complete.');
}

run().catch(console.error);
