const BasePage = require('./BasePage');

class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstProduct = page.locator('.s-main-slot h2 a').first();
  }

  async clickFirstProduct() {
    await this.firstProduct.click();
  }
}

module.exports = SearchPage;
