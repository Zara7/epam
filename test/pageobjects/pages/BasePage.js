class BasePage {
    /**
     * Navigate to a given URL.
     * @param {string} path - The URL path to navigate to.
     */
    async open(path) {
        await browser.url(path);
    }

    /**
     * Click on an element.
     * @param {WebdriverIO.Element} element - The element to click.
     */
    async click(element) {
        await element.waitForDisplayed();
        await element.click();
    }

    /**
     * Set text to an input element.
     * @param {WebdriverIO.Element} element - The element to set text on.
     * @param {string} text - The text to set.
     */
    async setText(element, text) {
        // await element.waitForEnabled();
        await element.setValue(text);
    }

    /**
     * Wait for an element to be displayed.
     * @param {WebdriverIO.Element} element - The element to check.
     */
    async waitForDisplayed(element) {
        await element.waitForDisplayed();
    }

    /**
     * Get text from an element.
     * @param {WebdriverIO.Element} element - The element to get text from.
     * @return {Promise<string>}
     */
    async getText(element) {
        await element.waitForDisplayed();
        return element.getText();
    }
        /**
     * Switches to a browser window based on its handle.
     * @param {string} handle - The handle of the window to switch to.
     */
        async switchToWindow(handle) {
            await browser.switchToWindow(handle);
    }
}

module.exports = BasePage;
