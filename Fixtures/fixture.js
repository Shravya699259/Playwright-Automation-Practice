
const base = require('@playwright/test')
const {LoginPage} = require('../Pages/LoginPage.js');
import { type } from 'node:os';

exports.customtest=base.test.extend({
loginPage : async(
   
    /**@type{{loginPage : import('@playwright/test').Page}}*/
    {page},use)=>{
        const userName = 'sravyabajoju@gmail.com';
        const password = 'Sravya@123'
        const loginObject=new LoginPage(page);
        await loginObject.navigate();
        await loginObject.login(userName,password);

        await page.waitForLoadState('load');
        await use(page);
        
}
})





 