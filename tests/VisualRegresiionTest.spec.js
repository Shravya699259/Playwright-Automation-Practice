const { test, expect } = require('@playwright/test')

test('visula regression testing', async ({ page }) => {
    await page.goto('/login.html');
    //full page
    await expect(page).toHaveScreenshot('login.png');

    //element
    await expect(page.getByTestId('login-username-input')).toHaveScreenshot('student.png');

    //mask dynamic elements
    await expect(page).toHaveScreenshot('login.png', {
        mask: [

            page.getByText('Real applications. Real APIs. Real auth. Built to be automated.'),
            page.getByText('© Playwright Automation Platform · Built by Rajeshkumar Muthu · v1.0')
        ]
    }

    )

    //maxdiffpixels
    await expect(page).toHaveScreenshot('login.png',{maxDiffPixels : 100})

    //threshold
     await expect(page).toHaveScreenshot('login.png',{threshold : 0.2});

})



test('screenshots',async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await page.screenshot({path : './Screenshots/practice.png',fullPage : true})
    await page.getByPlaceholder('Enter your name').screenshot({path : './Screenshots/element.png'});
})

