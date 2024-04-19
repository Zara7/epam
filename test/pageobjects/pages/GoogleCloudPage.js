const BasePage = require('./BasePage');
const SearchComponent = require('../components/SearchComponent');
class GoogleCloudPage extends BasePage {
    constructor () {
        super();
        this.searchComponent = new SearchComponent();
    }
    get calculatorLink() {
        return $('//a[@class="K5hUy" and @href="https://cloud.google.com/products/calculator-legacy?hl=es-419"]');
    }
    async open() {
        await super.open("https://cloud.google.com/");
    }

    async searchForCalculator(keyword) {
        await this.searchComponent.performSearch(keyword);
    }

    async navigateToCalculator() {
        await this.click(this.calculatorLink);
    }
}

module.exports = GoogleCloudPage;
