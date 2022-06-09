const BasePage = require('./Base.page');

class HomePage extends BasePage{  // Extending the HomePage class with BasePage class.

    constructor(page){  //HomePage class constructor

        super(page);  // Overriding the base class constructor by using the keyword super.


        //  Locators:  Define all of the page locators inside the constructor.

        this.loggedUser = '.logged-user-name';
        this.balances = '.balance-value';
    };

    async navigation(){
        await super.navigate('app.html');  // This line of code is overriding the Base class method "navigate".
    };

    async getUserName(){    // This is getUserName function, which is finding the logged in username.
        let user = await this.page.$(this.loggedUser);  
        return (await user).innerText();
    };

    async getBalance(balType){ // This is getBalance function, which is finding the balances.

        let balArray = await this.page.$$(this.balances);
        if(balType == 'total'){

            return (await balArray[0].$('span')).innerText(); 

        }
        else if(balType == 'credit'){
            
            return (await balArray[1]).innerText();

        }
        else{

            return (await balArray[2]).innerText();

        }
    };

};

module.exports = HomePage; // module.exports is the javaScript way letting you use the code of one file to another.