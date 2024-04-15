class GoogleCloudPage {
    async open() {
        await browser.url("https://cloud.google.com/");
    }

    async searchForCalculator(keyword) {
        const searchIcon = await $('//div[contains(@class, "YSM5S")]');
        await searchIcon.click();
        const searchInput =  await $('//input[contains(@class, "qdOxv-fmcmS-wGMbrd") and @type="text"]');
        await searchInput.setValue(keyword);
        await browser.keys('Enter');
    }

    async navigateToCalculator() {
        const calculatorLink = await $('//a[@class="K5hUy" and @href="https://cloud.google.com/products/calculator-legacy?hl=es-419"]');
        await calculatorLink.click();
    }
}

module.exports = GoogleCloudPage;
