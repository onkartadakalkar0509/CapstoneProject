import {test as base, expect} from "@playwright/test";
import { Formpage } from "../pages/formpage.js"

export const test = base.extend({
    formpage : async({page}, use)=>{
        await use(new Formpage(page));
    }
})
export { expect };