import { test as base, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.js'; 

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use (new Loginpage(page));
  }
});

export { expect };