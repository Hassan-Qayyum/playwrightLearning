const {chromium}=require('playwright');

(async()=>{
    const browser = await chromium.launch({headless:false, slowMo:300})
    const context = await browser.newContext({recordVideo:{dir:"./recordings"}}) //This line of code is saving the video in the recording directory.
    const page = await context.newPage()

    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1')
    await page.click('button')
    await page.waitForSelector('#loading') // This line of code is waiting for the loading selector
    await page.waitForSelector('#loading', {state: 'hidden'}) // This line of code is hiding the loading selector

    // await browser.close() // This line of code is commentted which means video will keep recording until you quit the browser manually.
})()