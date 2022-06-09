const{chromium}=require('playwright');
const HomePage = require('../models/Home.page');  // This line of code is importing Home.page class.
const LoginPage = require('../models/Login.page'); // This line of code is importing Login.page class.

describe("Applitools demo page", ()=>{  // This is the test suit.

    jest.setTimeout(60000); // This is the jest way to set time out.
    
    // Following lines of codes initializing the browser, context, page, homePage & loginPage with null.
    let browser = null; 
    let context = null;
    let page = null;
    let homePage = null;
    let loginPage = null;

    beforeAll(async()=>{ // BeforeAll hook execute before the test suit.
        
        browser = await chromium.launch({headless:false, slowMo:3000}); // This line of code is launching the browser with headful mode.
        context = await browser.newContext();   // This line of code is creating a cognito alike session within the browser.
        page = await context.newPage(); // This line of code is creating the new page or window pop-up withing in the browser.
        homePage = new HomePage(page);  // This line of code is creating the new object of the Home Page.
        loginPage = new LoginPage(page);    // This line of code is creating the new object of the Login Page. 
        await loginPage.navigate(); //  This line of code is the navigating to the Login Page Url.

    });

    afterAll(async()=>{ // After eAll hook execute at the end of the test suit.
 
        await browser.close(); // This line of code closes the browser.

    });

    it("Should be able to login", async()=>{

        await loginPage.loginUser("username","password");  // This line of code is passing the username and password into the LoginPage method 'loginUser';
        expect (await page.title()).not.toBeNull(); // This line of code is validating that the page title should not be null.
        
    });

    it("Should be logged in as Jack Gomez", async()=>{
        expect(await homePage.getUserName()).toBe('Jack Gomez');   // Calling the getUserName method of the HomePage and validating that the logged-in username is "Jack Gomez".

    });

    it("Should have balance of $350", async()=>{

        expect(await homePage.getBalance('total')).toBe('$350'); // Calling the getBalance method of the HomePage and passing an argument 'total' to validate that the balance should be $350.
    });
    
    it("Should have credit available of $17800", async()=>{
    
        expect(await homePage.getBalance("credit")).toBe("$17,800");  // Calling the getBalance method of the HomePage and passing an argument 'credit' to validate that the available balance should be $17,800.
    });
    it("Should have due today of $180", async()=>{
    
        expect(await homePage.getBalance("due")).toBe("$180"); // Calling the getBalance method of the HomePage and passing an argument 'due' to validate that the due balance should be $180.
    });

});