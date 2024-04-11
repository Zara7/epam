const PastebinPage = require("../pageobjects/PastebinPage.js")
describe("Create New Paste on Pastebin", () => {
    before(async () => {
        await browser.url("https://pastebin.com/");
    });

   
    it("Should create a new paste", async () => {
        await PastebinPage.login("Zara7", "ALASHKERT1!2!3!");

        await PastebinPage.createNewPast();

        await PastebinPage.setPasteText(`git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force
        `);
        await PastebinPage.selectSyntax("Bash")
        await PastebinPage.selectExpiration("10 Minutes");
        await PastebinPage.setPasteName("how to gain dominance among developers");
        await PastebinPage.createNewPaste();
        
        const actualTitle = await PastebinPage.getInfoTopText();

        const browserTitle = await browser.getTitle();
        expect(browserTitle).toContain(actualTitle);

        const code = await PastebinPage.getCodeText();

        const textareaElement = await $('.textarea.-raw.js-paste-raw');
        const textareaText = await textareaElement.getValue();

        expect(code).toContain(textareaText);

        const expire = await PastebinPage.getExpireText();
        expect(expire).toContain("10 MIN");

        const format = await PastebinPage.getFormatText();
        expect(format).toContain("Bash");

        await browser.pause(12000);
    });
});