import { test, expect } from '@playwright/test';

test('Visit Website', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Test your English/);
  await page.getByRole('button', { name: 'Allow all cookies' }).click();
});
