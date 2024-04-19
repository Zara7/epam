class SwitchToCalculatorComponent {
    async switchToCalculator() {
        const iframe = await $('iframe[src*="calculator-legacy/index"]');
        await browser.switchToFrame(iframe);
        const myFrame = await $('iframe#myFrame');
        await browser.switchToFrame(myFrame);
    }
}

module.exports = SwitchToCalculatorComponent;
