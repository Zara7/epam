// pages/PastebinPage.js
class PastebinPage {
    get postformText() { return $('#postform-text'); }
    get selectBox() { return $('#select2-postform-expiration-container'); }
    get postformName() { return $('#postform-name'); }
    get createPasteButton() { return $('button[type="submit"][title="Create New Paste"]'); }

    open() {
        browser.url("https://pastebin.com");
    }

    async createNewPaste(text, expiration, name) {
        await this.postformText.waitForDisplayed();
        await this.postformText.setValue(text);
        
        await this.selectBox.click();
        const option = await $('//li[contains(@class, "select2-results__option") and contains(text(), "' + expiration + '")]');
        await option.click();

        await this.postformName.setValue(name);

        await this.createPasteButton.click();
    }
}

export default new PastebinPage();