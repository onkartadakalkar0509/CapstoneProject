

export class BasePage {
    constructor(page){
        this.page = page;
    }
    async navigate(url){
        await this.page.goto(url,{
            waitUntil : "domcontentloaded"
        })
    }
        async clickElement(locator){
        await locator.click();
    }    
    async getPageUrl(){
        return this.page.url();
    }
    async waitForElement(locator){
        await locator.waitFor({
            state: "visible"
        })
    }
    async enterText(locator , text ){
        await locator.fill(text)
    }

    // async enterText(locator, name, email, password){
    //     await locator.fill(name, email, password)
    // }
}