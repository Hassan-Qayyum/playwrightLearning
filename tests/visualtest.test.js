const{chromium}=require('playwright');
const{ClassicRunner, Eyes, Target, RectangleSize}=require('@applitools/eyes-playwright'); // The line of code for the require applitools

describe('UI tests for dynamic content using playwright and applitools', ()=>{


    jest.setTimeout(9000000);  // This line of code is setting the Timeout in jest.

    let browser = null;
    let context = null;
    let page = null;
    const eyes = new Eyes(new ClassicRunner()); // This line of code is initializing the new object of Eyes.
    
    
    // You can also use beforeEach
    beforeAll(async()=>{  // This method executes before the test suite.
        browser = await chromium.launch({headless:false, slowMo:10000});
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://the-internet.herokuapp.com/dynamic_content');

    });
    
    afterAll(async()=>{
        await context.close();
        await browser.close();

    });
    test('Should look okay', async()=>{
        await page.waitForSelector('h3', {state:'attached'});
        await eyes.open(page, 'The internet', 'Dynamic Content', new RectangleSize(800,600)); // This line of code is opening the eyes.open method which takes driver,App Name, Test Name, viewportsize as arguments.
        await eyes.check(Target.window().fully()); // This line of code is checking the eyes in the given Target window.
        await eyes.close(); // This line of code is closing the eyes.

    });

});