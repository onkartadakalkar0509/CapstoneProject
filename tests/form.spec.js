import { test, expect } from '../Fixtures/formPageFixture.js';
import  Loginpage  from '../pages/loginpage.js';
import{ getFormData } from '../helpers/datahelper.js';

const formData = getFormData('json');

test.describe("Form Submission scenario using JSON", () => {
    
    for (const data of formData) {
        
        test(`submit form data for ${data.Name}`, async ({ page, formpage }) => {
           const loginpage = new Loginpage(page);
           await loginpage.loginToApplication(process.env.APP_USERNAME, process.env.APP_PASSWORD);
            await formpage.navigateToForm(); 
            await formpage.fillFormData(data.Name, data.Email, data.Password);
            await formpage.clickElement(formpage.submitbtn);
            await expect(formpage.successMessage).toBeVisible();
        });
    }
});