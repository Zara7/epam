const PastebinPage = require("../pageobjects/PastebinPage.js");

describe("Create New Paste on Pastebin", () => {
    beforeEach(async () => {
        await PastebinPage.open();
        await PastebinPage.login("Zara7", "ALASHKERT1!2!3!");
        await PastebinPage.createNewPast();
    });

    it("should set paste text", async () => {
        await PastebinPage.setPasteText(`git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force
        `);
        const code = await PastebinPage.getCodeText();
        const textareaElement = await $('.textarea.-raw.js-paste-raw');
        const textareaText = await textareaElement.getValue();
        expect(code).toContain(textareaText);
    });

    it("should select syntax", async () => {
        await PastebinPage.selectSyntax("Bash");
        const format = await PastebinPage.getFormatText();
        expect(format).toContain("Bash");
    });

    it("should select expiration", async () => {
        await PastebinPage.selectExpiration("10 Minutes");
        const expire = await PastebinPage.getExpireText();
        expect(expire).toContain("10 MIN");
    });

    it("should set paste name", async () => {
        await PastebinPage.setPasteName("how to gain dominance among developers");

        const actualTitle = await PastebinPage.getInfoTopText();
        const browserTitle = await browser.getTitle();
        expect(browserTitle).toContain(actualTitle);
    });

    it("should create a new paste", async () => {
        await PastebinPage.createNewPaste();
    });
});
