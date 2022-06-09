const{chromium}=require('playwright');

describe(`UI tests for bookstore using playwright`, ()=>{  // describe function holds all the tests

    let browser=null; // This line of code is initializing the browser with null
    let context=null; // This line of code is initializing the context with null
    let page=null;  // This line of code is initializing the page with null
    let firstRowCells = null;  // This line of code is initializing the array with null

    jest.setTimeout(100000000);  // This line of code is setting the Timeout in jest.
    
    // You can also use beforeEach
    beforeAll(async()=>{  // This method executes before the test suite.
        browser = await chromium.launch({headless:false, slowMo:10000});
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://demoqa.com/books');
    });
    // You can also use afterEach
    afterAll(async()=>{ // This method executes after the test suite.
        await browser.close();
    });

    test(`Should load page`, async()=>{ // This test method is checking either page is loaded sucessfully or not?
        console.log('test');
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();

    });

    test(`Should be able to search for eloquent javascript`, async()=>{ // This test method is searching 'eloquent' in the searchBox.
        await page.fill('#searchBox', 'eloquent');
    });

    test(`Should check if image if okay`, async()=>{
       firstRowCells = await page.$$('.ReactTable  .rt-tr-group:nth-child(1) .rt-td'); // This line of code is making an array of the table's first-row-cells
       const imageUrl = await firstRowCells[0].$('img'); // This line of code is saving the image selector in the 0 index of the firstRowCells array and storing it in imageUrl.
       expect (await imageUrl.getAttribute('src')).not.toBeNull();  // This line of code is making sure that the "image" has an attribute "src" and it is not null.
    });

    test(`Should check if title if okay`, async()=>{ // This test method is checking the book title.
        expect(await firstRowCells[1].innerText()).toBe('Eloquent JavaScript, Second Edition'); // This line of code is indicating that the book title is in the 1st index of the firstRowCells array and it is not null.
    });   

    test(`Should check if Author if okay`, async()=>{ // This test method is checking the book author.
        expect(await firstRowCells[2].innerText()).not.toBeNull(); // This line of code is indicating that the book author name is in the 2nd index of the firstRowCells array and it is not null.
    });

    test(`Should check if publisher if okay`, async()=>{ // This test method is checking the book publisher.
        expect(await firstRowCells[3].innerText()).not.toBeNull(); // This line of code is indicating that the book publisher name is in the 3rd index of the firstRowCells array and it is not null.
    });   
    
});
