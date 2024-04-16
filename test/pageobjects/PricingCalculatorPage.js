class PricingCalculatorPage {
    // constructor() {
    //     this.windowHandles = [];
    // }

    async sendEmailEstimate(email) {
        // this.windowHandles = await browser.getWindowHandles();
        // await this.switchToCalculator();
        const emailInputElement = await $('input[type="email"]');
        await emailInputElement.setValue(email);
        const sendButton =  await $('//*[@id="dialogContent_665"]/form/md-dialog-actions/button[2]');
        await sendButton.click();
    }

    async getPrice() {
        const priceElement = await $('//*[@id="resultBlock"]/md-card/md-toolbar/div/h2[2]');
        return await priceElement.getText();
    }


}

module.exports = PricingCalculatorPage;
