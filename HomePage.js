const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.suggestions = page.locator('.s-suggestion');
  }

  async searchProduct(text) {
    await this.fill(this.searchBox, text);
  }

  async selectThirdSuggestion() {
    await this.suggestions.first().waitFor();
    await this.suggestions.nth(2).click();
  }
}

module.exports = HomePage;
