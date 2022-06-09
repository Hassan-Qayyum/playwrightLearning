const {firefox}=require('playwright');

(async()=>{
    const browser = await firefox.launch({headless:false, slowMo: 1000})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp')
    /* 
    Note: We can select & unselect checkboxes and radio button by using arrays.
    Scenario: In above given website please check and uncheck the 2nd check box and radio button.
    1 - Check the 2nd check box and uncheck the 1st checkbox
    2 - Check the 2nd radio button
    */

    // Check Box
    const checkArray = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]') // This line of code is retreiving all the check boxes and setting them in checkArray.
    await checkArray[1].check() // This line of code is checking the 1st index (which contains the 2nd check box).
    await checkArray[0].uncheck() // This line of code is un-checking the 0 index (which contains the 1st check box).

    // Radio Button
    const radioArray = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=radio]') // This line of code is retreiving all the radio buttons and setting them in radioArray.
    await radioArray[1].check() // This line of code is checking the 1st index (which contains the 2nd radio button).

    await browser.close()

})()