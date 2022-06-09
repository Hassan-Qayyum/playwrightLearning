const{webkit}=require('playwright');

(async()=>{
    const browser = await webkit.launch({headless:false, slowMo: 300})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.w3schools.com/html/html_iframe.asp')
    /*
    Note: 
    1 - You can get iFrame text either by name or url.
    2 - If iframe does not have name then you will get it by url and for url you need to write RegularExpression.
    */

    const iframe = await page.frame({url: /\/default.asp/}) 
    /* 
    Note:
    1- Above line of code is getting iframe
    2- default.asp is given inside the iframe tag on w3schools website
    3- In code we wrote default.asp url in the regular expression)
    */
    const paragraph = await iframe.$('#main > div.w3-panel.w3-info.intro > p') // This line of code is selecting a single element/selector.
    console.log(await paragraph.innerText()) // This line of code is printing the innerText of the iframe

    await browser.close()
})()