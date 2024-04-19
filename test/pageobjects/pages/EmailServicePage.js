const BasePage = require('./BasePage');
class EmailServicePage extends BasePage {
    constructor () {
        super();
    }
    
    get addToEstimateButton() {
        return $('input[id="login"]');
    }
    get emailInputElement() {
        return $('input[id="login"]');
    }
    get refreshButtonFirst() {
        return $('//*[@id="refreshbut"]');
    }
    get refreshButton() {
        return $('/html/body/div[1]/div/div/main/div[2]/div[1]/div/div[1]/div[6]/button');
    }
    async openEmailService(url) {
        await browser.newWindow(url);
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
    }

    async enterEmail(emailAddress) {
        await this.setText(this.emailInputElement, emailAddress);
        const email =  await this.getText(this.emailInputElement)
        await this.click(this.emailInputElement);
        await this.click(this.refreshButtonFirst);
        
    }

    async verifyReceivedEmail(priceExpected, windowHandles) {
        await browser.switchToWindow(windowHandles[1]);
        await this.click(this.refreshButton);

        const ifmailFrame = await $('//*[@id="ifmail"]');
        await browser.switchToFrame(ifmailFrame);
        const priceFromEmail = await $('//*[@id="mail"]/div/div/table/tbody/tr[2]/td/table/tbody/tr[1]/td[4]');
        await priceFromEmail.waitForExist();

        
        await expect(priceFromEmail).toHaveTextContaining(priceExpected);
    }
}

module.exports = EmailServicePage;
