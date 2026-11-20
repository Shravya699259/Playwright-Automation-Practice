const {test,expect}=require('@playwright/test');


//skip
test('mobile only test',async({page,isMobile})=>{
    test.skip(!isMobile,'this test is for mobile only');
})

//fail
test.fail('failed test',async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html');
})

//slow
test('slow test',async({page})=>{

    await page.goto('https://www.playwrightautomation.com/practice.html');

    test.slow();
    
//multi select
     await page.getByText('Nike').click({modifiers :['Control']});
     await page.getByText('Adidas').click({modifiers :['Control']});

     
//dependent dropdown country
await page.getByTestId('dep-dropdown-country').selectOption('India');
await page.getByTestId('dep-dropdown-state').selectOption({label : 'Tamil Nadu'});
await page.getByTestId('dep-dropdown-city').selectOption({index : 1});

//);






//single file upload
await page.getByTestId('upload-single').setInputFiles('Files/playwright interview question2.pdf');

//multiple files upload
await page.getByTestId('upload-multiple').setInputFiles(['Files/playwright interview question2.pdf','Files/playwright interview question3.pdf']);

////hidden input file upload
await page.getByTestId('upload-hidden').setInputFiles('Files/playwright interview question2.pdf');


//witout file from disk
await page.getByTestId('upload-single').setInputFiles({
    name : 'playwright.pdf',
    memetype : 'application/pdf',
    buffer : Buffer.from('Sravya')
})


//FileChooser event upload
const fileChooserPromise =  page.waitForEvent('filechooser');
await page.getByTestId('btn-browse-files').click();
(await fileChooserPromise).setFiles('Files/playwright interview question2.pdf');


//download pdf
const [downloadFile] = await Promise.all([
    page.waitForEvent('download'),

    page.locator('#btn-download-pdf').click()


])


 
const download = await downloadFile;
console.log(await download.suggestedFilename());
await download.saveAs('Downloads/'+download.suggestedFilename());


//static table reading
console.log(await page.getByTestId('static-table').getByTestId('static-row-1').getByTestId('static-cell-1-1').textContent());


//Alerts and popups
page.on('dialog',dialog=>{


    if(dialog.type()==='alert')
    dialog.accept();

    else if(dialog.type()==='confirm')
    dialog.dismiss();

    if(dialog.type()==='prompt')
    dialog.accept('Rajesh');
})
await page.getByTestId('btn-simple-alert').click();
await page.getByTestId('btn-confirm-alert').click();
await page.getByTestId('btn-prompt-alert').click();

})

