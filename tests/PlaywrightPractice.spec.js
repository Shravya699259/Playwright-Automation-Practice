const {customtest}=require('../Fixtures/fixture.js')
const {test,expect}=require('@playwright/test')
const {PracticePage} = require('../Pages/PracticePage.js')


customtest('Playwright practice',async({loginPage,context})=>{
     /**@type{{loginPage : import('@playwright/test').Page}}*/
  
  


     //multi select
     await loginPage.getByText('Nike').click({modifiers :['Control']});
     await loginPage.getByText('Adidas').click({modifiers :['Control']});

     
//dependent dropdown country
await loginPage.getByTestId('dep-dropdown-country').selectOption('India');
await loginPage.getByTestId('dep-dropdown-state').selectOption({label : 'Tamil Nadu'});
await loginPage.getByTestId('dep-dropdown-city').selectOption({index : 1});

await loginPage.pause();












     

//single file upload
await loginPage.getByTestId('upload-single').setInputFiles('Files/playwright interview question2.pdf');

//multiple files upload
await loginPage.getByTestId('upload-multiple').setInputFiles(['Files/playwright interview question2.pdf','Files/playwright interview question3.pdf']);

////hidden input file upload
await loginPage.getByTestId('upload-hidden').setInputFiles('Files/playwright interview question2.pdf');


//witout file from disk
await loginPage.getByTestId('upload-single').setInputFiles({
    name : 'playwright.pdf',
    memetype : 'application/pdf',
    buffer : Buffer.from('Sravya')
})


//FileChooser event upload
const fileChooserPromise =  loginPage.waitForEvent('filechooser');
await loginPage.getByTestId('btn-browse-files').click();
(await fileChooserPromise).setFiles('Files/playwright interview question2.pdf');


//download pdf
const [downloadFile] = await Promise.all([
    loginPage.waitForEvent('download'),

    loginPage.locator('#btn-download-pdf').click()


])


 
const download = await downloadFile;
console.log(await download.suggestedFilename());
await download.saveAs('Downloads/'+download.suggestedFilename());


//static table reading
console.log(await loginPage.getByTestId('static-table').getByTestId('static-row-1').getByTestId('static-cell-1-1').textContent());


//Alerts and popups
loginPage.on('dialog',dialog=>{


    if(dialog.type()==='alert')
    dialog.accept();

    else if(dialog.type()==='confirm')
    dialog.dismiss();

    if(dialog.type()==='prompt')
    dialog.accept('Rajesh');
})
await loginPage.getByTestId('btn-simple-alert').click();
await loginPage.getByTestId('btn-confirm-alert').click();
await loginPage.getByTestId('btn-prompt-alert').click();



//mouse actions
//hover
await loginPage.getByRole('button',{name :'Point Me'}).hover();
await loginPage.getByText('Mobiles').click();

//right click
await loginPage.getByRole('button',{name : 'Right Click Me'}).click({button : 'right'});

//dbl click
await loginPage.getByRole('button',{name : 'Copy Text'}).dblclick();

//drag and drop
await loginPage.getByTestId('drag-rome').dragTo(await loginPage.getByTestId('drop-italy'));

//single slider
await loginPage.getByTestId('slider-price').press('End');
await loginPage.getByTestId('slider-price').press('Home');
await loginPage.getByTestId('slider-price').click({position:{x:100,y:0}});

//double slider
await loginPage.getByTestId('slider-price-min').focus();
//await loginPage.mouse.move(10,0);
await loginPage.pause();

//keyboard actions
await loginPage.getByTestId('keyboard-option-qa').click();
await loginPage.keyboard.press('ArrowDown');
await loginPage.keyboard.press('Enter');
await expect(loginPage.getByTestId('keyboard-selected-department')).toHaveText('Automation');
await loginPage.getByTestId('keyboard-secret-input').pressSequentially('PLAYWRIGHT',{delay : 50});
await loginPage.getByTestId('keyboard-copy-source').focus();
await loginPage.keyboard.press('Control+A');
await loginPage.keyboard.press('Control+C');
await loginPage.keyboard.press('Tab');
await loginPage.keyboard.press('Control+V');


//scrolling
const scrollPoint=await loginPage.getByTestId('employee-item').filter({hasText : 'EMP-043'});
await scrollPoint.click();
await loginPage.mouse.wheel(0,150);


//new page and new window
const [newPage]=await Promise.all([

     context.waitForEvent('page'),
     loginPage.getByTestId('btn-open-pw-tab').click()

])
//popup
const [popupPage] = await Promise.all([
    loginPage.waitForEvent('popup'),
    loginPage.getByTestId('btn-open-login-window').click()
])
await popupPage.locator('#email').fill('sravyabajoju@gmail.com');
await loginPage.pause();

//switch between tabs
console.log(await context.pages());
const pages = context.pages();
await pages[0].bringToFront();

await expect(newPage.getByRole('heading',{name : 'Playwright Test'})).toBeVisible();


//Frames
const framePage = loginPage.frameLocator("#frame-flight-status");
await expect(framePage.getByText('PW101')).toBeVisible();

//date pickers
await loginPage.getByTestId('dp-native-dob').fill('2000-10-10');
await loginPage.getByTestId('dp-arrow-input').click();
await loginPage.getByTestId('dp-arrow-date-2026-11-11').click();


































});













