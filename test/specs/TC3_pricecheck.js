import loginPage from "../../PageObject/login.page.js";
import mainPage from "../../PageObject/main.page.js";
import inputdata from "../../PageObject/inputdata.js";
import chai from "chai";

const expect = chai.expect;
describe ("Product price check", () => {
    it ("Check if the product price less than 1000", async () => {
        await mainPage.open();
        await mainPage.signIn();

        await browser.switchToFrame(await $('iframe.signin-iframe'));
        await loginPage.login(inputdata.validMail, inputdata.validPswd);

        await mainPage.inputSearchItem(inputdata.itemSearch);
        await mainPage.startSearch();
        //await console.log(await mainPage.productPrice.getText());
        //await console.log(await mainPage.getProductPrice());
        await expect(await mainPage.getProductPrice()).lessThan(1000);
    })
})