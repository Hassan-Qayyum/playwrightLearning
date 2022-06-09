const {chromium}=require("playwright"); 
/*
Note: 
1- Above line of code is indicating that the code will run in the chromium browser.
2- You can also use firefox OR webkit in place of chromium.
*/


/* 
1- Following code is written in an iffe function (Immediately invoked function expression) .
2- We made a async function as Playwright works in async await pattern.
*/

(async()=>{ 		
const browser = await chromium.launch({headless:false, slowMo:100}) 
/* 
1- Above line of code will launch the browser in the headless mode
2- For launching the browser in headful mode you need to disable the headless mode like: chromium.launch({headless:false})
3- For slowing down the execution process you need to add one more argument slowMo like: chromium.launch({headless:false, slowMo:100})
*/

const context = await browser.newContext() // This line of code is creating a new context.
const page = await context.newPage() // This line of code is creating a newPage of the context.
await page.goto("http://www.google.com") // This line of code is navigating the user to the google.
await browser.close() // This line of code is closing the browser.
})()

/*
Run code by entering this command in the terminal: node example.js (in our case node firstScript.js)
*/

