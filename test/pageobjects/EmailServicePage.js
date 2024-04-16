class EmailServicePage {
    async openEmailService(url) {
        await browser.newWindow(url);
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
    }

    async enterEmail() {
        const emailInputElement = await $('input[id="login"]');
        await emailInputElement.setValue("epamtask3@yopmail.com");
        const email = await emailInputElement.getValue();
        await emailInputElement.click();
        const refreshButton = await $('//*[@id="refreshbut"]');
        await refreshButton.click();
    }

    async verifyReceivedEmail(priceExpected, windowHandles) {
        await browser.switchToWindow(windowHandles[1]);
        const refreshButton = await $('/html/body/div[1]/div/div/main/div[2]/div[1]/div/div[1]/div[6]/button');
        await refreshButton.click();

        const ifmailFrame = await $('//*[@id="ifmail"]');
        await browser.switchToFrame(ifmailFrame);
        const priceFromEmail = await $('//*[@id="mail"]/div/div/table/tbody/tr[2]/td/table/tbody/tr[1]/td[4]');
        await priceFromEmail.waitForExist();

        
        await expect(priceFromEmail).toHaveTextContaining(priceExpected);

        // const priceFromEmail = await priceInfoElement.getText();


        // expect(priceFromEmail).toContain(priceExpected);
    }
}

module.exports = EmailServicePage;
