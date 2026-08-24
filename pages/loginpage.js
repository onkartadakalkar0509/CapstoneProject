import { expect } from "@playwright/test";
import { BasePage } from "../pages/basepage.js"

export default class Loginpage extends BasePage{
    constructor(page){
        super(page);
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator("#password");
        this.signinbtn = page.locator("#signInBtn");
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
   async loginToApplication(username, password) {
        await this.navigate("https://rahulshettyacademy.com/loginpagePractise/");
        await this.enterText(this.usernameInput, username);
        await this.enterText(this.passwordInput, password);
        await this.clickElement(this.signinbtn);
    }
    async verifyLoginSuccessful(){
       await expect(this.page).toHaveURL(/angularpractice/i);
    }
}