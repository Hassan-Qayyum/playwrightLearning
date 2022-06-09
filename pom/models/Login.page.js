const BasePage = require('./Base.page');  // Importing Base Class

class LoginPage extends BasePage{  // Extending the LoginPage class with Base class.

    constructor(page){  // Login class constructor
        super(page);    // overriding the base class constructor by using the keyword super.



        //  Locators:  Define all of the page locators inside the constructor.

        this.userNameTxt = '#username'; 
        this.passwordTxt = '#password';
        this.loginBtn = '#log-in';
    };

    async navigate(){
        await super.navigate('index.html');  // This line of code is overriding the Base class method "navigate". 
    };

    async loginUser(username, password){  // This is login function where user will simply pass the username & password.

        await this.page.fill(this.userNameTxt, username);
        await this.page.fill(this.passwordTxt,password);
        await this.page.click(this.loginBtn);

    };
};

module.exports = LoginPage; // module.exports is the javaScript way letting you use the code of one file to another.