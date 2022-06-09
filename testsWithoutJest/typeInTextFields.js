const {chromium}=require('playwright');

(async()=>{
    const browser = await chromium.launch({headless:false, slowMo:100})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://the-internet.herokuapp.com/forgot_password')
    const email = await page.$('#email') // This line of code is element handle, where $ used for single element/selector.
    await email.type('hassanqayyum8@gmail.com', {delay:30}) // This line of code is delaying the execution process for 30 miliseconds
    await browser.close()
})()