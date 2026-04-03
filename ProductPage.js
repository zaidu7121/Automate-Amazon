const BasePage = require('./BasePage');

class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.description = page.locator('#productDescription');
    this.bullets = page.locator('#feature-bullets');
  }

  async getProductDescription() {
    if (await this.description.isVisible()) {
      return await this.description.innerText();
    } else {
      return await this.bullets.innerText();
    }
  }
}

module.exports = ProductPage;
