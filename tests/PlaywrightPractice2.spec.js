
const { test, expect } = require('@playwright/test')
const { PracticePage } = require('../Pages/PracticePage.js')
const { LoginPage } = require('../Pages/LoginPage.js');
const testdata = JSON.parse(JSON.stringify(require('../Utils/LoginTestData.json')))

for(const data of testdata){
test(`Playwright practice for ${data.name}`, async ({ page }) => {

    
     const loginObject = new LoginPage(page);
     await loginObject.navigate();
     await loginObject.login(data.userName, data.password);
     await expect(page.getByRole('heading', { name: 'Form Controls' })).toBeVisible();
     const practiceObject = new PracticePage(page);

     //text box

     await practiceObject.textBox(data.name, data.email, data.address);
     await expect(practiceObject.submitText).toHaveText('submitted');

     //radio
     await practiceObject.radioButton();
     await expect(practiceObject.radio).toBeChecked();


     //checkbox
     await practiceObject.checkBox();
     await expect(practiceObject.toggle).toBeChecked();

     //select
     await practiceObject.selectDropdown(data.product);

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
     await practiceObject.autoSuggestiveDropdown(data.searchName);

     //searchable custom dropdown

     await practiceObject.searchableDropdown();
     await expect(practiceObject.sDropdownOption).toHaveText('Playwright')









});
}













