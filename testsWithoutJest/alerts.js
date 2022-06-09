const{chromium}=require('playwright');
(async()=>{
    const browser = await chromium.launch({headless:false, slowMo:300})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://demoqa.com/alerts')
    /*
    Note:
    1 - Page.on is the listener which listens the button's action. 
    2 - Page.once is also the listener but it also allows you to use the multiple alerts.
    3 - Page.once only gets called once. 
    */
    page.once('dialog', async dialog=>{
        console.log(dialog.message()) // This line of code is printing the text which is written on the dialog box.
        await dialog.accept() // This line of code accepts the current alert and close it.

    })
    await page.click('#confirmButton') // This line of code is clicking to the button.
    page.once('dialog', async dialog=>{
        console.log(dialog.message()) // This line of code is printing the text which is written on the dialog box.
        await dialog.accept("Typing in the Prompt Alert") // This line of code is accepting the prompt alert and types "Typing in the Prompt Alert" in it.

    })
    await page.click('#promtButton') // This line of code is clicking to the button.
    await browser.close()

})()