describe("Create New Paste on Pastebin", () => {
    beforeEach(async () => {
        await browser.url("https://pastebin.com");
    });

    it("Should create a new paste", async () => {
        const postformText = await $('#postform-text');
        await postformText.waitForDisplayed();

        await postformText.setValue("Hello from WebDriver");
        

        const selectBox = await $('#select2-postform-expiration-container');
        await selectBox.click();

        const option = await $('//li[contains(@class, "select2-results__option") and contains(text(), "10 Minutes")]');
        await option.click();

        const postformName = await $('#postform-name');
        await postformName.setValue("helloweb");

        const createPasteButton = await $('//button[@type="submit" and contains(text(), "Create New Paste")]');
        await createPasteButton.click();

        const h1Element = await $('//div[@class="info-top"]//h1');
        const infoTop = await h1Element.getText();
        expect(infoTop).toContain("helloweb");
        
        const codeElement = await $('//div[@class="de1"]');
        const code = await codeElement.getText();
        expect(text).toContain("Hello from WebDriver");

        const expireElement = await $('//div[@class="expire"]');
        const expire = await expireElement.getText();
        expect(expire).toContain("Hello from WebDriver");

        await browser.pause(8000);
        
    });
});