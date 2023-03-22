import { test, expect } from '@playwright/test';

test('Visit Website', async ({ page }) => {
  await page.goto('https://test-english.com/');
  await expect(page).toHaveTitle(/Test your English/);
});

test('Accept Cookies', async ({ page }) => {
  await page.goto('https://test-english.com/');
  await page.getByRole('button', { name: 'Allow all cookies' }).click();
});
