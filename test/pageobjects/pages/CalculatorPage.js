const BasePage = require('./BasePage');
const SwitchToCalculatorComponent = require('../components/SwitchToCalculatorComponent');
const FormComponent = require('../components/FormComponent');
class CalculatorPage extends BasePage {
    constructor () {
        super();
        this.switchToCalculatorComponent = new SwitchToCalculatorComponent;
        this.formComponent = new FormComponent;
    }
    get addToEstimateButton() {
        return $(`//button[contains(text(), 'Add to Estimate') and not(@disabled)]`);
    }

    get emailEstimateButton() {
        return $('//button[@title="Email Estimate"]');
    }

    get emailInputElement() {
        return $('input[type="email"]');
    }

    get sendButton() {
        return $('//*[@id="dialogContent_665"]/form/md-dialog-actions/button[2]');
    }

    get priceElement() {
        return $('//*[@id="resultBlock"]/md-card/md-toolbar/div/h2[2]')
    }
    get switchToWindow() {
        return async (handle) => {
            await browser.switchToWindow(handle);
        };
    }
    async switchToCalculatorFrame() {
        await this.switchToCalculatorComponent.switchToCalculator();
    }
    async fillOutForm() {
        await this.formComponent.fillOutForm();
    }
    
    async addToEstimate() {
        await this.click(this.addToEstimateButton);
        await this.click(this.emailEstimateButton);
    }
    async switchToCalculator(windowHandles) {
        await this.switchToWindow(windowHandles[0]);
        await this.switchToCalculatorComponent.switchToCalculator();
    }
    async sendEmailEstimate(email) {
        await this.setText(this.emailInputElement, email);
        await this.click(this.sendButton);
    }
    async getPrice() {
        return await this.getText(this.priceElement);
    }
}

module.exports = CalculatorPage;
