import loginPage from "../../PageObject/login.page.js";
import mainPage from "../../PageObject/main.page.js";

describe ("Product price check", () => {
    it ("Check if the product price less than 1000", async () => {
        await mainPage.open();
        await mainPage.signIn();

        await browser.switchToFrame(await $('iframe.signin-iframe'));
        await loginPage.login('bachinskaya.mari@gmail.com', 'Ba4inka');

        await mainPage.inputSearchItem("Harry Potter");
        await mainPage.startSearch();
        await expect(mainPage.productPrice).toBeExisting();
    })
})