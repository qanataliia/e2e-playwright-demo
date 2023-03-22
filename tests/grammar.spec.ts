import { test } from "@playwright/test";
import { selectors } from "../pages/grammarPointPage";

test("Visit Grammar Exercise and Answer First Question", async ({ page }) => {
  await page.goto(
    "https://test-english.com/grammar-points/a1/present-simple-forms-of-to-be/"
  );
  await page.getByRole("button", { name: "Allow all cookies" }).click();
  await page.locator(selectors.firstDropdown).selectOption("is");
  await page.locator(selectors.secondDropdown).selectOption("am");
});
