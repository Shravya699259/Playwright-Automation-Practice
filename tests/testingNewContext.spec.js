const {test}=require('@playwright/test')

test('testing contexts',async({browser})=>{

    const context1=await browser.newContext();
    const page1=await context1.newPage();
    const context2=await browser.newContext();
    const page2=await context2.newPage();
    await page1.goto('/login.html');
    
    await page2.goto('/login.html');
    



})