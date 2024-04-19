class SearchComponent {
    async performSearch(keyword) {
        const searchIcon = await $('//div[contains(@class, "YSM5S")]');
        await searchIcon.click();
        const searchInput = await $('//input[contains(@class, "qdOxv-fmcmS-wGMbrd") and @type="text"]');
        await searchInput.setValue(keyword);
        await browser.keys('Enter');
    }
}
module.exports = SearchComponent;