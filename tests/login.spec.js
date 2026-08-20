import { test, expect } from '../Fixtures/loginPageFixture.js';

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the folder is exactly 'env' and the file is exactly '.env.Onkar'
dotenv.config({ path: path.resolve(__dirname, 'env/.env.Onkar') });

// Define the variables pulling from the globally loaded .env file
const USERNAME = process.env.LOGIN_USERNAME;
const PASSWORD = process.env.LOGIN_PASSWORD;

test.describe('Login scenario', () => {
   test('user can log in with valid credentials', async ({ loginPage }) => {

    // console.log('Loaded USERNAME:', USERNAME);
    // console.log('Loaded PASSWORD:', PASSWORD );

     await loginPage.launchApplication();
     await loginPage.loginToApplication(USERNAME, PASSWORD);
     await loginPage.verifyLoginSuccessful();
   });
});