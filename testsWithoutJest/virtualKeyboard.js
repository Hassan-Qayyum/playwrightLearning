const{chromium}=require('playwright');

(async()=>{
    const browser = await chromium.launch({headless:false, slowMo: 300})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://the-internet.herokuapp.com/key_presses')

    await page.click('#target') // This line of code is clicking on the input field.

    await page.keyboard.type('Typing using the keyboard API. This is great') // This line of code is typing in the input field
    await page.keyboard.down('Shift') // This line of code is holding the shift key.

    for (let i=0; i< ' This is great'.length; i++){  // This line of code is indicating that it will run upto the "This is great" string's length
        await page.keyboard.press('ArrowLeft') // This line of code is selecting the text (This is great) in the left side. 
    }

    await page.keyboard.up('Shift') // This line of code is releasing the shift key.
    await page.keyboard.press('Backspace') // This line of code is removing the text "This is great".
    await page.keyboard.type(' Best of luck!') // This line of code is typing the text ' Best of luck!'.

    await browser.close()
})()