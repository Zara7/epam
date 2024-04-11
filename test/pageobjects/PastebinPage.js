class PastebinPage {
    async open() {
        await browser.url("https://pastebin.com/");
    }
    async login (username, password) {
        const loginBtn = await $('.header_sign a[href="/login"]');
        await loginBtn.click();

        const usernameElement = await $('#loginform-username');
        await usernameElement.waitForDisplayed();
        await usernameElement.setValue(username);

        const passwordElement = await $("#loginform-password");
        await passwordElement.waitForDisplayed();
        await passwordElement.setValue(password);

        const loginButton = await $('//button[@type="submit" and contains(text(), "Login")]');
        await loginButton.click();
    }
    async createNewPast () {
        const spanElement = await $('//a[@class="header__btn"]/span[contains(text(), "paste")]');
        await spanElement.click();
    }
    async setPasteText(text) {
        const postformText = await $('#postform-text');
        await postformText.waitForDisplayed();
        await postformText.setValue(text);
    }
    async selectSyntax(format) {
        const selectBox = await $('#select2-postform-format-container');
        await selectBox.click();
        const option = await $(`//li[contains(@class, "select2-results__option") and contains(text(), "${format}")]`);
        await option.click();
    }
    async selectExpiration(expiration) {
        const selectBox = await $('#select2-postform-expiration-container');
        await selectBox.click();
        const option = await $(`//li[contains(@class, "select2-results__option") and contains(text(), "${expiration}")]`);
        await option.click();
    }

    async setPasteName(name) {
        const postformName = await $('#postform-name');
        await postformName.setValue(name);
    }

    async createNewPaste() {
        const createPasteButton = await $('//button[@type="submit" and contains(text(), "Create New Paste")]');
        await createPasteButton.click();
    }

    async getInfoTopText() {
        const h1Element = await $('//div[@class="info-top"]//h1');
        return await h1Element.getText();
    }

    async getCodeText() {
        const codeElement = await $('//ol[@class="bash"]');
        return await codeElement.getText();
    }

    async getExpireText() {
        const expireElement = await $('//div[@class="expire"]');
        return await expireElement.getText();
    }
    async getFormatText() {
        const formatElement = await $('a[href="/archive/bash"]');
        return await formatElement.getText();
    }
}
module.exports = new PastebinPage();

