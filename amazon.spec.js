const { test } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const SearchPage = require('../pages/SearchPage');
const ProductPage = require('../pages/ProductPage');

test('Amazon iPhone flow', async ({ page, context }) => {
  const home = new HomePage(page);
  const search = new SearchPage(page);

  await home.navigate('https://www.amazon.in');
  await home.searchProduct('iphone');
  await home.selectThirdSuggestion();

  await search.clickFirstProduct();

  const pages = context.pages();
  const productPage = new ProductPage(pages[pages.length - 1]);

  const description = await productPage.getProductDescription();
  console.log(description);
});
