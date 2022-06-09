class BasePage{
    constructor(page){
        this.page = page; // This is base class constructor and it is initializing the page.
    };

    async navigate(path){
        await this.page.goto(`https://demo.applitools.com/${path}`); // This line of code is refering to the base url.
    };
};

module.exports = BasePage; // module.exports is the javaScript way letting you use the code of one file to another.