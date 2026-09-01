import { BasePage } from './basepage.js';

export class Formpage extends BasePage {
    constructor(page) {
        super(page);
        this.nameField = page.locator('form input[name="name"]');
        this.emailField = page.locator('form input[name="email"]');
        this.passwordField = page.locator('form input[type="password"]');
        this.submitbtn = page.getByRole('button', { name: 'Submit' });
        this.category =  page.getByText('Category 1')
        this.successMessage = page.locator("//div[@class='alert alert-success alert-dismissible']");
    }

    async navigateToForm() {
        await this.category.click();
    }

    async fillFormData(name, email, password) {
        await this.enterText(this.nameField, name);
        await this.enterText(this.emailField, email);
        await this.enterText(this.passwordField, password);
    }
}