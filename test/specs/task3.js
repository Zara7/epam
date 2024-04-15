const GoogleCloudPage = require("../pageobjects/GoogleCloudPage.js");

describe("Make", () => {
    before(async () => {
        await browser.url("https://cloud.google.com/");
    });

    it("Should make search", async () => {
        await GoogleCloudPage.search("Google Cloud Platform Pricing Calculator");
    });
});
