const {chromium}=require('playwright');

(async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

   await page.goto('https://demoqa.com/automation-practice-form')

    const firstName = await page.$('#firstName')
    const sportCheckBox = await page.$('#hobbies-checkbox-1')
    const submitBtn = await page.$('#submit')

    /*
    Note: Following checks are returning true or false based upon the element state.
    */

    console.log(await firstName.isDisabled())   // false
    console.log(await firstName.isEnabled())    // true
    console.log(await firstName.isEditable())   // true
    console.log(await sportCheckBox.isChecked()) // false
    console.log(await sportCheckBox.isVisible()) // true
    console.log( await sportCheckBox.isHidden()) // false
    console.log(await sportCheckBox.isVisible()) // true

    await browser.close()
})()