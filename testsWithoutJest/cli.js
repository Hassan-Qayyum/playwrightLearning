const{chromium, expect}=require('playwright');
(async () => {

  const browser = await chromium.launch({headless:false, slowMo:1000});
  const context = await browser.newContext();
  const page = await context.newPage();

  
  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.click('[data-test="username"]');

  // Fill [data-test="username"]
  await page.fill('[data-test="username"]', 'standard_user');

  // Click [data-test="password"]
  await page.click('[data-test="password"]');

  // Fill [data-test="password"]
  await page.fill('[data-test="password"]', 'secret_sauce');

  // Click [data-test="login-button"]
  await page.click('[data-test="login-button"]');
  // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


  // Click text=Sauce Labs Bolt T-Shirt
  await page.click('text=Sauce Labs Bolt T-Shirt');
  // await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=1');

  // Click [data-test="add-to-cart-sauce-labs-bolt-t-shirt"]
  await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');

  // Click a:has-text("1")
  await page.click('a:has-text("1")');
  // await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Click [data-test="checkout"]
  await page.click('[data-test="checkout"]');
  // await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  // Click [data-test="firstName"]
  await page.click('[data-test="firstName"]');

  // Press CapsLock
  await page.press('[data-test="firstName"]', 'CapsLock');

  // Fill [data-test="firstName"]
  await page.fill('[data-test="firstName"]', 'Hassan');

  // Click [data-test="lastName"]
  await page.click('[data-test="lastName"]');

  // Press CapsLock
  await page.press('[data-test="lastName"]', 'CapsLock');

  // Fill [data-test="lastName"]
  await page.fill('[data-test="lastName"]', 'Qayyum');

  // Click [data-test="postalCode"]
  await page.click('[data-test="postalCode"]');

  // Fill [data-test="postalCode"]
  await page.fill('[data-test="postalCode"]', '54000');

  // Click [data-test="continue"]
  await page.click('[data-test="continue"]'); 
  // await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  
  await page.click('[id="finish"]');


  await browser.close();


})();