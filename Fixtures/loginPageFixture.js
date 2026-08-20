import { test as base, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.js'; 

export const test = base.extend({
  // This block right here tells Playwright what "loginPage" means
  loginPage: async ({ page }, use) => {
    const loginPage = new Loginpage(page);
    await use(loginPage);
  }
});

export { expect };