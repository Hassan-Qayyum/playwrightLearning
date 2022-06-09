const{chromium}=require('playwright');

(async()=>{
    const browser = await chromium.launch({headless:false, slowMo:1000})
    const context = await browser.newContext()
    const page =  await context.newPage()

    await page.goto('https://paint.js.org/')

    await page.mouse.move(200,200) // This line of code is moving the mouse in the x (200 pixels) & y (200 pixels) coordinates.
    await page.mouse.down() /// This line of code holds the mouse click.
    
    /*
    Note: Following code is making a rectangle using the mouse.
    */
    await page.mouse.move(400,200)
    await page.mouse.move(400,400)
    await page.mouse.move(200,400)
    await page.mouse.move(200,200)

    await page.mouse.up() // This line of code is releasing the mouse click.

    await browser.close()



})()