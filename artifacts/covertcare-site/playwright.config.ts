import { defineConfig, devices } from '@playwright/test';

// In this Replit environment the Playwright-downloaded headless shell is missing
// system libraries. We use the Nix-managed Chromium binary instead, configured
// via the PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH env var so the path stays out of
// the source and can be overridden in CI or other environments.
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:24737',
    trace: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        ...(executablePath
          ? {
              launchOptions: {
                executablePath,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
              },
            }
          : {}),
      },
    },
  ],
});
