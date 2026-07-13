import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:24737';

// ── Routes ────────────────────────────────────────────────────────────────────

const routes = [
  { path: '/',                 label: 'Home' },
  { path: '/solution',         label: 'Solution' },
  { path: '/how-it-works',     label: 'How it works' },
  { path: '/pilot',            label: 'Pilot' },
  { path: '/safety-and-trust', label: 'Safety and trust' },
  { path: '/about',            label: 'About' },
  { path: '/contact',          label: 'Contact' },
  { path: '/privacy',          label: 'Privacy' },
  { path: '/terms',            label: 'Terms' },
];

for (const { path, label } of routes) {
  test(`page loads: ${label} (${path})`, async ({ page }) => {
    const response = await page.goto(`${BASE}${path}`);
    // No 5xx
    expect(response?.status(), `HTTP status for ${path}`).toBeLessThan(500);
    // main landmark exists and has content
    const main = page.locator('main#main-content');
    await expect(main).toBeVisible();
    const text = await main.innerText();
    expect(text.trim().length, `main content should not be empty for ${path}`).toBeGreaterThan(0);
  });
}

// ── Contact page: three form tabs ─────────────────────────────────────────────

test('contact page – Host / Design Partner tab renders form fields', async ({ page }) => {
  await page.goto(`${BASE}/contact`);
  // Partner tab is active by default
  const tab = page.getByRole('tab', { name: /Host \/ Design Partner/i });
  await expect(tab).toBeVisible();
  await expect(tab).toHaveAttribute('data-state', 'active');
  // At least one input is visible inside the active panel
  const panel = page.locator('[role="tabpanel"][data-state="active"]');
  await expect(panel.locator('input, textarea, select').first()).toBeVisible();
});

test('contact page – Expert Advisory tab renders form fields', async ({ page }) => {
  await page.goto(`${BASE}/contact`);
  const tab = page.getByRole('tab', { name: /Expert Advisory/i });
  await tab.click();
  await expect(tab).toHaveAttribute('data-state', 'active');
  const panel = page.locator('[role="tabpanel"][data-state="active"]');
  await expect(panel.locator('input, textarea, select').first()).toBeVisible();
});

test('contact page – General Contact tab renders form fields', async ({ page }) => {
  await page.goto(`${BASE}/contact`);
  const tab = page.getByRole('tab', { name: /General Contact/i });
  await tab.click();
  await expect(tab).toHaveAttribute('data-state', 'active');
  const panel = page.locator('[role="tabpanel"][data-state="active"]');
  await expect(panel.locator('input, textarea, select').first()).toBeVisible();
});

// ── Announcement bar ──────────────────────────────────────────────────────────

test('announcement bar appears and dismisses', async ({ page }) => {
  // Clear session so bar is fresh
  await page.goto(`${BASE}/`);
  await page.evaluate(() => sessionStorage.removeItem('covertcare-announcement-dismissed'));
  await page.reload();

  const bar = page.locator('text=Pilot-design stage').or(
    page.locator('text=CovertCare is in pilot design')
  ).first();
  await expect(bar).toBeVisible();

  // Dismiss via the × button
  await page.getByRole('button', { name: /Dismiss announcement/i }).click();
  await expect(bar).not.toBeVisible();

  // sessionStorage flag is set
  const flag = await page.evaluate(() =>
    sessionStorage.getItem('covertcare-announcement-dismissed')
  );
  expect(flag).toBe('true');
});

// ── Mobile hamburger menu (mobile viewport) ───────────────────────────────────

test('mobile menu opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE}/`);

  const toggle = page.getByRole('button', { name: /Toggle navigation menu/i });
  await expect(toggle).toBeVisible();

  // Desktop nav should be hidden; mobile menu closed
  await expect(page.locator('#mobile-menu')).not.toBeVisible();

  // Open
  await toggle.click();
  await expect(page.locator('#mobile-menu')).toBeVisible();
  // aria-expanded should be true
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');

  // Close
  await toggle.click();
  await expect(page.locator('#mobile-menu')).not.toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
