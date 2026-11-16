const {customtest}=require('../Fixtures/fixture.js')
const {test,expect}=require('@playwright/test')
const {PracticePage} = require('../Pages/PracticePage.js')


customtest('Playwright practice',async({loginPage})=>{
     /**@type{{loginPage : import('@playwright/test').Page}}*/


     const name ='sravya';
     const email='sravyabajoju@gmail.com'
     const address='hyderabad'
     const product ='Nike';
     const searchName = 'smart'
await expect(loginPage.getByRole('heading',{name:'Form Controls'})).toBeVisible();
const practiceObject =new PracticePage(loginPage);

//text box

await practiceObject.textBox(name,email,address);
await expect(practiceObject.submitText).toHaveText('submitted');

//radio
await practiceObject.radioButton();
await expect(practiceObject.radio).toBeChecked();


//checkbox
await practiceObject.checkBox();
await expect(practiceObject.toggle).toBeChecked();

//select
await practiceObject.selectDropdown(product);

//tooltip
await practiceObject.toolTip();
await expect(practiceObject.tooltipMessage).toBeVisible();

//hidden
await expect(practiceObject.hiddenMessage).toHaveText('hidden');

//dropdown
await practiceObject.staticDropdown();

//bootstrap dropdown
await practiceObject.bootstrapDropdown();


//Auto suggestive dropdown
await practiceObject.autoSuggestiveDropdown(searchName);

//searchable custom dropdown

await practiceObject.searchableDropdown();
await expect(practiceObject.sDropdownOption).toHaveText('Playwright')









});













