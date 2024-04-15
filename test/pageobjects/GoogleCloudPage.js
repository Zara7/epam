const { Key } = require('webdriverio');
class GoogleCloudPage {
    async open() {
        await browser.url("https://cloud.google.com/");
    }
    async search (keyword) {
        const divElement = await $('//div[contains(@class, "YSM5S")]');
        await divElement.click();

        const inputElement = await $('//input[contains(@class, "qdOxv-fmcmS-wGMbrd") and @type="text"]');
        await inputElement.setValue(keyword);

        const iconElement = await $('//i[contains(@class, "google-material-icons PETVs") and @aria-label="Search"]');
        await iconElement.click();  
        
        const linkElement = await $('//a[@class="K5hUy" and @href="https://cloud.google.com/products/calculator-legacy?hl=es-419"]');
        await linkElement.click();

        const iframe = await $(`//iframe[contains(@src, 'calculator-legacy/index') and @allow='clipboard-write https://cloud-dot-devsite-v2-prod.appspot.com']`);
        await iframe.waitForExist();
        await browser.switchToFrame(iframe);

        const myiframe = await $('#myFrame');
        await myiframe.waitForExist();
        await browser.switchToFrame(myiframe);
        // Number of instances
        const quantityElement = await $('//input[@name="quantity"]');
        await quantityElement.setValue(4);
        
        // What are these instances for?
        const labelElement = await $(`//input[@ng-model='listingCtrl.computeServer.label']`);
        await labelElement.setValue('');
     
        // Operating System / Software
        const softwareLabelElement = await $(`//md-select[@ng-model='listingCtrl.computeServer.os']`);
        await softwareLabelElement.click();
        const softwareoptionElement = await $(`//md-option[@value='free']`);
        await softwareoptionElement.waitForDisplayed();
        await softwareoptionElement.click();
        
        // Provisioning model
        const provisioningSelectElement= await $(`//md-select[@aria-label='VM Class: Regular']`);
        await provisioningSelectElement.click();
        
        const provisioningOptionElement = await $(`//md-option[@value='regular']`);
        await provisioningOptionElement.waitForDisplayed();
        await provisioningOptionElement.click();
        
        // Machine Family
        const familySelectBoxElement = await $(`//md-select[@placeholder='Machine Family']`);
        await familySelectBoxElement.click()

        const familyOptionElement = await $(`//md-option[@value='gp']`);
        await familyOptionElement.waitForDisplayed();
        await familyOptionElement.click();
     

        // Series

        const seriesSelectBoxElement = await $(`//md-select[@placeholder='Series']`);
        await seriesSelectBoxElement.click();
        

        const seriesOptionElement = await $(`//md-option[@value='n1']`);
        await seriesOptionElement.waitForDisplayed();
        await seriesOptionElement.click();

        // Machine type
        const typeSelectBoxElemen = await $(`//md-select[@placeholder='Instance type']`);
        await typeSelectBoxElemen.click();

        const typeoptionElement = await $(`//md-option[@value='CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8']`);
        await typeoptionElement.waitForDisplayed();
        await typeoptionElement.click();

        // CHECKBOX
        const checkboxelement = await $(`//md-checkbox[@aria-label='Add GPUs']`);
        await checkboxelement.click();
  

        // GPU type
        const gputypeSelecBoxElement = await $(`//md-select[@placeholder='GPU type']`);
        await gputypeSelecBoxElement.click(); 

        const gputypeOptionElement = await $(`//md-option[@value='NVIDIA_TESLA_V100']`);
        await gputypeOptionElement.waitForDisplayed();
        await gputypeOptionElement.click();
  
        // GPU number
        const gpunumberSelecBoxElement = await $(`//md-select[@placeholder='Number of GPUs']`);
        await gpunumberSelecBoxElement.click();

        const gpunumberOptionElement = await $(`/html/body/div[10]/md-select-menu/md-content/md-option[2]`);
        await gpunumberOptionElement.waitForDisplayed();
        await gpunumberOptionElement.click();

        // // Local SSD
        const localSelectBoxElement = await $(`//md-select[@placeholder='Local SSD']`);
        await localSelectBoxElement.click();
     
        const localOptionElement = await $(`//md-option[@ng-value="item.value" and contains(@ng-repeat, "item in listingCtrl.dynamicSsd.computeServer") and normalize-space(div) = '2x375 GB']`);
        await localOptionElement.waitForDisplayed();
        await localOptionElement.click();


        // Datacenter location
        const locationSelectBoxElement = await $(`//md-select[@placeholder='Datacenter location']`);
        await locationSelectBoxElement.click();
   
        const locationSearchElement = await $(`//input[@region-input and @ng-model="listingCtrl.inputRegionText.computeServer" and @type="text" and contains(@class, "md-input")]`);
        await locationSearchElement.waitForDisplayed();
        await locationSearchElement.setValue('Frankfurt');

        const locationOptionElement = await $(`//md-option[@region-option and @ng-value="item.value" and contains(@ng-repeat, "computeServer") and normalize-space(div) = 'Frankfurt (europe-west3)']`);
        await locationOptionElement.waitForDisplayed();
        await locationOptionElement.click();

        // Committed usage
        const usageSelecBoxElement =  await $(`//md-select[@placeholder='Committed usage']`);
        await usageSelecBoxElement.click();

        const usageOptionElement = await $(`//*[@id="select_option_138"]`);
        await usageOptionElement.waitForDisplayed();
        await usageOptionElement.click();

        const buttonElement = await $(`//button[contains(text(), 'Add to Estimate') and not(@disabled)]`);
        await buttonElement.click();

        const emailEstimateButton = await $('//button[@title="Email Estimate"]');
        await emailEstimateButton.click();

        await browser.switchToParentFrame();
        await browser.switchToParentFrame();
        
        await browser.newWindow('https://yopmail.com/');
        // await this.open();
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);

        const emailInputElement = await $('//input[@id="login" and @placeholder="Enter your inbox here"]');
        await emailInputElement.setValue('epamtask3@yopmail.com');
        const email = await emailInputElement.getValue();
        await emailInputElement.click();
 
     
        const arrowElement = await $('//*[@id="refreshbut"]');
        await arrowElement.click();

        await browser.switchToWindow(windowHandles[0]);
        await browser.switchToFrame(iframe);
        await browser.switchToFrame(myiframe);
   
        const newEmailElement = await $('//input[@name="description" and @type="email"]');
        await browser.keys([Key.Control, 'v']);
        await newEmailElement.waitForDisplayed();
        await newEmailElement.setValue(email);

        const priceElement = await $('//*[@id="resultBlock"]/md-card/md-toolbar/div/h2[2]');
        const price = await priceElement.getText();

        const sendButtonElement = await $('//*[@id="dialogContent_665"]/form/md-dialog-actions/button[2]');
        await sendButtonElement.click();

        await browser.switchToWindow(windowHandles[1]);
        const refreshButton = await $('/html/body/div[1]/div/div/main/div[2]/div[1]/div/div[1]/div[6]/button');
        await refreshButton.click();

        const ifmail = await $('//*[@id="ifmail"]');
        await ifmail.waitForExist();
        await browser.switchToFrame(ifmail);
        
        await browser.pause(5000);
        const priceInfoElement = await $('//*[@id="mail"]/div/div/table/tbody/tr[2]/td/table/tbody/tr[1]/td[4]');
        await priceInfoElement.waitForExist();

        const price1 = price.replace(' / mo', '');
    
        await expect(priceInfoElement).toHaveTextContaining(price1);

        await browser.pause(5000);
    }
}
module.exports = new GoogleCloudPage();

