class PastebinPage {
    async open() {
        await browser.url("https://pastebin.com/");
    }
    async setPasteText(text) {
        const postformText = await $('#postform-text');
        await postformText.waitForDisplayed();
        await postformText.setValue(text);
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
        const codeElement = await $('//div[@class="de1"]');
        return await codeElement.getText();
    }

    async getExpireText() {
        const expireElement = await $('//div[@class="expire"]');
        return await expireElement.getText();
    }
}
module.exports = new PastebinPage();

