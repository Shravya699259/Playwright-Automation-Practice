class PracticePage {
    constructor(page) {


        this.page=page;
        this.name = page.getByPlaceholder('Enter your name');
        this.email = page.getByPlaceholder('Enter your email');
        this.address = page.getByPlaceholder('Enter your address');
        this.submit = page.getByTestId('btn-submit-text-inputs');
        this.submitText = page.getByTestId('text-inputs-status');
        this.radio = page.getByTestId('radio-male');
        this.select = page.getByTestId('checkbox-select-all');
        this.toggle = page.getByTestId('toggle-notifications');
        this.multiSelect = page.getByTestId('multiselect-colors');
        this.tooltip = page.getByRole('button', { name: 'Delivery estimate' });
        this.tooltipMessage = page.getByText('Standard delivery takes 3–5 working days.');
        this.hidden = page.getByRole('button', { name: 'Hide Element' }).click();
        this.hiddenMessage = page.getByTestId('showhide-state');
        this.dropdown = page.getByTestId('dropdown-country');
        this.bDropdown = page.locator('.bd-select-trigger');
        this.bDropdownOption = page.getByText('Automation Tester');
        this.aDropdown = page.getByPlaceholder('Search for Products');
        this.aDropdownOption = page.getByTestId('autosuggest-results').first();
        this.sDropdown= page.getByTestId('searchable-dropdown-input');
        this.sDropdownOption=page.getByTestId('searchable-selected-value');
        


    }


    async textBox(name, email, address) {
        await this.name.fill(name);
        await this.email.fill(email);
        await this.address.fill(address);
        await this.submit.click();
    }

    async radioButton() {
        await this.radio.click();
    }

    async checkBox() {
        await this.select.check();
        await this.toggle.check();
    }
    async selectDropdown(product) {
        await this.multiSelect.selectOption(product);
    }


    async toolTip() {
        await this.tooltip.hover();

    }

    async hide() {
        await this.hidden.click();
    }

    async staticDropdown() {
        await this.dropdown.selectOption('India');
    }

    async bootstrapDropdown() {
        await this.bDropdown.click();
        await this.page.waitForLoadState('load');
        await this.bDropdownOption.click(); 
    }

    async autoSuggestiveDropdown(searchName) {
        await this.aDropdown.fill(searchName);
        await this.page.waitForLoadState('load');
        await this.aDropdownOption.click();
    }

    async searchableDropdown(){
        await this.sDropdown.click();
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.keyboard.press('Escape');

    }


}

module.exports = { PracticePage };