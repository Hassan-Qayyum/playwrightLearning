const{chromium}=require('playwright');

(async()=>{

const browser = await chromium.launch({headless:false, slowMo:1000})
const context = await browser.newContext()
const page = await context.newPage()
await page.goto('https://www.apronus.com/music/lessons/unit01.htm') // beautiful piano website, please make your own master piece of sound
await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button')
await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button')
await page.click('#t1 > table > tr:nth-child(2) > td:nth-child(10) > button')
await page.click('#t1 > table > tr:nth-child(3) > td:nth-child(1) > button')
await page.click('#t1 > table > tr:nth-child(3) > td:nth-child(3) > button')
await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(12) > button')
await page.click('#t2 > table > tr:nth-child(1) > td:nth-child(6) > button')
await page.click('#t2 > table > tr:nth-child(2) > td:nth-child(5) > button')
await page.click('#t2 > table > tr:nth-child(1) > td:nth-child(8) > button')
await page.click('#t2 > table > tr:nth-child(1) > td:nth-child(1) > button')
await page.click('#t2 > table > tr:nth-child(2) > td:nth-child(3) > button')
await page.click('#t2 > table > tr:nth-child(3) > td:nth-child(1) > button')
await browser.close()
})()