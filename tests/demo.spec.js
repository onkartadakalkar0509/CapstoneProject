// tests/demo.spec.js
// DEMO DAY: this is the "simple script" you add fresh in a newly cloned
// copy of main, then push — the pipeline should pick it up automatically.

const { test, expect } = require('@playwright/test');

test('homepage has expected title and URL', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/.*Example.*/i); // update to match real title
  await expect(page).toHaveURL(/example\.com/i);  // update to match real URL
});
