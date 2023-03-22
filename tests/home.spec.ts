import { test, expect } from "@playwright/test";

test("Visit Website and Accept Cookies", async ({ page }) => {
  await page.goto('https://test-english.com/');
  await expect(page).toHaveTitle(/Test your English/);
  const allowCookiesButton = page.getByRole("button", {
    name: "Allow all cookies",
  });
  await allowCookiesButton.click();
});
