const{chromium,devices}=require('playwright');
const iPhone = devices['iPhone 11']; // In this line of code "devices" is a dictionary of devices 

(async()=>{
    const browser = await chromium.launch({headless:false, slowMo:300})
    const context = await browser.newContext({
        ...iPhone, // This line of code is spreading the iPhone which we declared above the async function.
        permissions: ['geolocation'], // This line of code is giving the permission of geolocation.
        geolocation: { latitude:31.47627230,longitude:74.27068560}, // This line of code is setting the geolocation cordinates as latitude & longitude 
        locale: 'en-EN' // This line of code is setting the language e.g. en-EN (English), fr-FR (French)
    })
    const page = await context.newPage()
    await page.goto('https://www.google.com/maps') // This line of code will open the google map location on iPhone 11 emulator (The same location which we set the above).
    await browser.close()
})()