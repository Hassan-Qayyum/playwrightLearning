const{chromium}=require('playwright');

(async()=>{
    const browser = await chromium.launch({headless:false, slowMo:30})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://applitools.com/')
    await page.screenshot({path: './screenshots/page.png'}) // This line of code takes the screenshot of the page.
    
    const logo = await page.$('.logo') // This line of code is the element handle.
    await logo.screenshot({path: './screenshots/element.png'}) // This line of code takes the screenshot of the page element.
    
    await page.screenshot({path: './screenshots/fullPage.png', fullPage: true}) // This line of code takes the screenshot of the full page.
    await browser.close()
    
})()