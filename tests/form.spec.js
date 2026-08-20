// tests/form.spec.js
// Built on feature/form branch. Pulls test data from helpers (json or excel).

import { test, expect } from ('@playwright/test');
import  { getFormData } from ('../helpers/dataHelper');

const formData = getFormData('json'); 
test.describe('Form submission scenario', () => {
  for (const data of formData) {
    test(`submit form for ${data.firstName} ${data.lastName}`, async ({ page }) => {
      await page.goto('/form');

      // Update selectors to match the real application under test
      await page.fill('#firstName', data.firstName);
      await page.fill('#lastName', data.lastName);
      await page.fill('#email', data.email);
      await page.fill('#phone', data.phone);
      await page.fill('#address', data.address);

      await page.click('#submitButton');

      await expect(page.locator('.success-message')).toBeVisible();
    });
  }
});
