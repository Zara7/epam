const GoogleCloudPage = require('../pageobjects/pages/GoogleCloudPage');
const CalculatorPage = require('../pageobjects/pages/CalculatorPage');
const EmailServicePage = require('../pageobjects/pages/EmailServicePage');


describe('Google Cloud Platform Pricing Calculator', function() {
    const googleCloudPage = new GoogleCloudPage();
    const calculatorPage = new CalculatorPage();
    const emailService = new EmailServicePage();

    before(async function() {
        await googleCloudPage.open();
    });
    afterEach(async function () {
        if (this.currentTest.state === 'failed') {
            const date = new Date().toISOString().replace(/:/g, '-');
            const filename = `screenshot_${date}.png`;
            await browser.saveScreenshot(`./screenshots/${filename}`);
        }
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
        await emailService.enterEmail("epamtask4@yopmail.com");
    });
    it('should switch to calculator page', async function() {
        const windowHandles = await browser.getWindowHandles();
        await calculatorPage.switchToCalculator(windowHandles);
    });

    it('should send email', async function() {
        await calculatorPage.sendEmailEstimate('epamtask4@yopmail.com');
    });

    it('should that the emailed total estimated cost matches the result in the calculator', async function() {
       
        const estimatedPrice = await calculatorPage.getPrice();
        const priceExpected = await  estimatedPrice.replace(' / mo', '');

        const windowHandles = await browser.getWindowHandles();
        await emailService.verifyReceivedEmail(priceExpected, windowHandles);
      
    });
});
