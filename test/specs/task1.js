const PastebinPage = require("../../pageobjects/PastebinPage.js")
describe("Create New Paste on Pastebin", () => {
    before(async () => {
        await browser.url("https://pastebin.com/");
    });

    it("Should create a new paste", async () => {
        await PastebinPage.setPasteText("Hello from WebDriver");
        await PastebinPage.selectExpiration("10 Minutes");
        await PastebinPage.setPasteName("helloweb");
        await PastebinPage.createNewPaste();

        const infoTop = await PastebinPage.getInfoTopText();
        expect(infoTop).toContain("helloweb");

        const code = await PastebinPage.getCodeText();
        expect(code).toContain("Hello from WebDriver");

        const expire = await PastebinPage.getExpireText();
        expect(expire).toContain("10 MIN");
    });
});