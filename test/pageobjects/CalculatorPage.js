class CalculatorPage {
    async switchToCalculatorFrame() {
        const iframe = await $('iframe[src*="calculator-legacy/index"]');
        await browser.switchToFrame(iframe);
        const myFrame = await $('iframe#myFrame');
        await browser.switchToFrame(myFrame);
    }

    async fillOutForm() {
        await this.inputNumberOfInstances(4);
        await this.inputReasonOfInstances();
        await this.selectOperatingSystem();
        await this.selectProvisioningModel();
        await this.selectMachineFamily();
        await this.selectSeries();
        await this.selectMachineType();
        await this.enableGPUsOption();
        await this.selectGPUType();
        await this.selectGPUNumber();
        await this.selectLocalSSDSize();
        await this.selectLocation();
        await this.selectCommittedUsage();
        await this.addToEstimate();
    }

    async inputNumberOfInstances(number) {
        const quantityInput = await $('input[name="quantity"]');
        await quantityInput.setValue(number);
    }
    async inputReasonOfInstances() {
        const reasonInput = await $(`//input[@ng-model='listingCtrl.computeServer.label']`);
        await reasonInput.setValue('');
    }

    async selectOperatingSystem() {
        const osDropdown = await $(`//md-select[@ng-model='listingCtrl.computeServer.os']`);
        await osDropdown.click();
        const option = await $(`//md-option[@value='free']`);
        await option.click();
    }
    async selectProvisioningModel() {
        const provisioningSelectElement= await $(`//md-select[@aria-label='VM Class: Regular']`);
        await provisioningSelectElement.click();
        const provisioningOptionElement = await $(`//md-option[@value='regular']`);
        await provisioningOptionElement.waitForDisplayed();
        await provisioningOptionElement.click();
    }
    async selectMachineFamily() {
        const familySelectBoxElement = await $(`//md-select[@placeholder='Machine Family']`);
        await familySelectBoxElement.click()

        const familyOptionElement = await $(`//md-option[@value='gp']`);
        await familyOptionElement.waitForDisplayed();
        await familyOptionElement.click();
    }
    async selectSeries() {
        const seriesSelectBoxElement = await $(`//md-select[@placeholder='Series']`);
        await seriesSelectBoxElement.click();
        const seriesOptionElement = await $(`//md-option[@value='n1']`);
        await seriesOptionElement.waitForDisplayed();
        await seriesOptionElement.click();
    }
    async selectMachineType() {
        const typeSelectBoxElemen = await $(`//md-select[@placeholder='Instance type']`);
        await typeSelectBoxElemen.click();
        const typeoptionElement = await $(`//md-option[@value='CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8']`);
        await typeoptionElement.waitForDisplayed();
        await typeoptionElement.click();
    }
    async enableGPUsOption() {
        const checkboxelement = await $(`//md-checkbox[@aria-label='Add GPUs']`);
        await checkboxelement.click();
    }
    async selectGPUType() {
        const gputypeSelecBoxElement = await $(`//md-select[@placeholder='GPU type']`);
        await gputypeSelecBoxElement.click(); 

        const gputypeOptionElement = await $(`//md-option[@value='NVIDIA_TESLA_V100']`);
        await gputypeOptionElement.waitForDisplayed();
        await gputypeOptionElement.click();
    }
    async selectGPUNumber() {
        const gpunumberSelecBoxElement = await $(`//md-select[@placeholder='Number of GPUs']`);
        await gpunumberSelecBoxElement.click();

        const gpunumberOptionElement = await $(`/html/body/div[10]/md-select-menu/md-content/md-option[2]`);
        await gpunumberOptionElement.waitForDisplayed();
        await gpunumberOptionElement.click();
    }
    async selectLocalSSDSize() {
        const localSelectBoxElement = await $(`//md-select[@placeholder='Local SSD']`);
        await localSelectBoxElement.click();
     
        const localOptionElement = await $(`//md-option[@ng-value="item.value" and contains(@ng-repeat, "item in listingCtrl.dynamicSsd.computeServer") and normalize-space(div) = '2x375 GB']`);
        await localOptionElement.waitForDisplayed();
        await localOptionElement.click();
    }
    async selectLocation() {
        const locationSelectBoxElement = await $(`//md-select[@placeholder='Datacenter location']`);
        await locationSelectBoxElement.click();
   
        const locationSearchElement = await $(`//input[@region-input and @ng-model="listingCtrl.inputRegionText.computeServer" and @type="text" and contains(@class, "md-input")]`);
        await locationSearchElement.waitForDisplayed();
        await locationSearchElement.setValue('Frankfurt');

        const locationOptionElement = await $(`//md-option[@region-option and @ng-value="item.value" and contains(@ng-repeat, "computeServer") and normalize-space(div) = 'Frankfurt (europe-west3)']`);
        await locationOptionElement.waitForDisplayed();
        await locationOptionElement.click();
    } 
    async selectCommittedUsage() {
        const usageSelecBoxElement =  await $(`//md-select[@placeholder='Committed usage']`);
        await usageSelecBoxElement.click();

        const usageOptionElement = await $(`//*[@id="select_option_138"]`);
        await usageOptionElement.waitForDisplayed();
        await usageOptionElement.click();

    }
    async addToEstimate() {
        const addToEstimateButton =  await $(`//button[contains(text(), 'Add to Estimate') and not(@disabled)]`);
        await addToEstimateButton.click();

        const emailEstimateButton = await $('//button[@title="Email Estimate"]');
        await emailEstimateButton.click();
        
        await browser.switchToParentFrame();
        await browser.switchToParentFrame();
    }
    //     async switchToCalculator() {
    //     await browser.switchToWindow(this.windowHandles[0]);
    //     const iframe = await $('//iframe[contains(@src, "calculator-legacy")]');
    //     await browser.switchToFrame(iframe);
    //     const myiframe = await $('iframe#myFrame');
    //     await browser.switchToFrame(myiframe);
    // }
}

module.exports = CalculatorPage;
