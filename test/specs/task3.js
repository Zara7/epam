const GoogleCloudPage = require('../pageObjects/GoogleCloudPage');
const CalculatorPage = require('../pageObjects/CalculatorPage');
const EmailServicePage = require('../pageObjects/EmailServicePage');
const PricingCalculatorPage = require('../pageobjects/PricingCalculatorPage');

describe('Google Cloud Platform Pricing Calculator', function() {
    const googleCloudPage = new GoogleCloudPage();
    const calculatorPage = new CalculatorPage();
    const emailService = new EmailServicePage();
    const pricingCalculatorPage = new PricingCalculatorPage();

    before(async function() {
        await googleCloudPage.open();
        console.log("search");
        await googleCloudPage.searchForCalculator('Google Cloud Platform Pricing Calculator');
        console.log("search calc");
        await googleCloudPage.navigateToCalculator();
        console.log("calculatir");
        await calculatorPage.switchToCalculatorFrame();
        console.log("frame");
    });

    it('should fill out the Compute Engine form and add to estimate', async function() {
        await calculatorPage.fillOutForm();
        await calculatorPage.addToEstimate();
    });

    it('should send an email with the cost estimate', async function() {
        await emailService.openEmailService('https://yopmail.com/');
        await emailService.enterEmailAndRefresh();
        await calculatorPage.switchToCalculator();
        await pricingCalculatorPage.sendEmailEstimate('epamtask3@yopmail.com');
        // const estimatedPrice = await pricingCalculatorPage.getPrice();
        // await emailService.verifyReceivedEmail(estimatedPrice);
      
    });
    
    // Add more tests as needed for other functionalities
});
