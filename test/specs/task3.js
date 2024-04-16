const GoogleCloudPage = require('../pageObjects/GoogleCloudPage');
const CalculatorPage = require('../pageobjects/CalculatorPage');
const EmailServicePage = require('../pageObjects/EmailServicePage');
const PricingCalculatorPage = require('../pageobjects/PricingCalculatorPage');

describe('Google Cloud Platform Pricing Calculator', function() {
    const googleCloudPage = new GoogleCloudPage();
    const calculatorPage = new CalculatorPage();
    const emailService = new EmailServicePage();
    const pricingCalculatorPage = new PricingCalculatorPage();

    before(async function() {
        await googleCloudPage.open();
    });
    it ('should search  and navigate to calculator page ', async function() {
        await googleCloudPage.searchForCalculator('Google Cloud Platform Pricing Calculator');
        await googleCloudPage.navigateToCalculator();
    })
    it('should fill out the Compute Engine form', async function() {
        await calculatorPage.switchToCalculatorFrame();
        await calculatorPage.fillOutForm();
    });
    it('should add form for estimation', async function() {
        await calculatorPage.addToEstimate();
    });
    it('should open email service page', async function() {
        await emailService.openEmailService('https://yopmail.com/');
    });
    it('should generate new email', async function() {
        await emailService.enterEmail();
    });
    it('should switch to calculator page', async function() {
        const windowHandles = await browser.getWindowHandles();
        await calculatorPage.switchToCalculator(windowHandles);
    });

    it('should send email', async function() {
        await pricingCalculatorPage.sendEmailEstimate('epamtask3@yopmail.com');
    });

    it('should that the emailed total estimated cost matches the result in the calculator', async function() {
       
        const estimatedPrice = await pricingCalculatorPage.getPrice();
        const priceExpected = await  estimatedPrice.replace(' / mo', '');

        const windowHandles = await browser.getWindowHandles();
        await emailService.verifyReceivedEmail(priceExpected, windowHandles);
      
    });
});
