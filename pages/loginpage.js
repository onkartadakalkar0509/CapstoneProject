import { expect } from "@playwright/test";
import { BasePage } from "../pages/basepage.js"

export default class Loginpage extends BasePage{
    constructor(page){
        super(page);
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator("#password");
        this.signinbtn = page.locator("#signInBtn");
        this.iphonex = page.getByText('iphone X')
    }  
    
    async launchApplication(){
        await this.navigate("");
    }
    async enterUsername(username){
        await this.enterText(this.usernameInput, username)
    }
    async enterPassword(password){
        await this.enterText(this.passwordInput, password)
    }
    async clickLogin(){
        await Promise.all([
            this.page.waitForURL(/loginpagePractise/i),
            this.signinbtn.click()
        ])
    }
    async loginToApplication(username, password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
    async verifyLoginSuccessful(){
       await expect(this.page).toHaveURL(/angularpractice/i);
    }

}