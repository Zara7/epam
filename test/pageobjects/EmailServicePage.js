class EmailServicePage {
    async openEmailService(url) {
        await browser.newWindow(url);
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
    }

    async enterEmailAndRefresh() {
        const emailInputElement = await $('input[id="login"]');
        await emailInputElement.setValue("epamtask3@yopmail.com");
        const email = await emailInputElement.getValue();
        await emailInputElement.click();
        const refreshButton = await $('//*[@id="refreshbut"]');
        await refreshButton.click();
    }

    async verifyReceivedEmail(priceExpected) {
        const ifmailFrame = await $('//*[@id="ifmail"]');
        await browser.switchToFrame(ifmailFrame);
        const priceInfoElement = await $('//*[@id="mail"]/div/div/table/tbody/tr[2]/td/table/tbody/tr[1]/td[4]');
        await priceInfoElement.waitForExist();
        const priceFromEmail = await priceInfoElement.getText();
        expect(priceFromEmail).toContain(priceExpected);
    }
}

module.exports = EmailServicePage;
