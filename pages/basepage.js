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
    async getPageTitle(){
        return this.page.url();
    }
    async waitForElement(){
        await locator.waitFor({
            state: "visible"
        })
    }
    async enterText(locator , text ){
        await locator.fill(text)
    }
}