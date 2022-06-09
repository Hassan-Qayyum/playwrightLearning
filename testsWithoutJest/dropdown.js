const {chromium}=require('playwright');
(async()=>{
    const browser= await chromium.launch({headless:false, slowMo:300})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    const dropdown = await page.$('#dropdown')  // DropDown handle

    /*
    DropDown options can be get by following 3 ways
    1 - value
    2 - label
    3 - index
    */

    // By value
    await dropdown.selectOption({value: "1"})
    // By label
    await dropdown.selectOption({label: "Option 2"})
    // By index
    await dropdown.selectOption({index:1})


    /*
    Note: Instead of selecting options like above we can store them in an array with the following code.
    */

    const availableOptions = await dropdown.$$('option') // This line of code is retrieving all the available options of the dropdown. $$ => This symbol indicates that it is retrieving more than 1 elements/selectors.
    for(let i = 0; i< availableOptions.length; i++){  // For loop is printing the innerText of the each dropdown's option
        console.log(await availableOptions[i].innerText())
    }
    
    await browser.close()

})()