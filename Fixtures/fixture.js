
const base = require('@playwright/test')
const {LoginPage} = require('../Pages/LoginPage.js');
const testdata=JSON.parse(JSON.stringify(require('../Utils/LoginTestData.json')))
import { type } from 'node:os';


exports.customtest=base.test.extend({
loginPage : async(
   
    /**@type{{loginPage : import('@playwright/test').Page}}*/
    {page},use)=>{
        
        console.log(testdata);
        
        const loginObject=new LoginPage(page);
        await loginObject.navigate();
        await loginObject.login(testdata.userName,testdata.password);

        //await page.waitForLoadState('load');
        await use(page);
        
}
})






 