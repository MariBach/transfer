import mainPage from "../../PageObject/main.page.js";
import loginPage from "../../PageObject/login.page.js";
import InputData from "../../PageObject/inputdata.js";

describe('Login testing', () => {
    it('Negative login testing', async() => {
        //Main page
        await mainPage.open();
        await mainPage.signIn();                   
        //Login page        
        await browser.switchToFrame(await $('iframe.signin-iframe'));
        await loginPage.login(InputData.validMail, InputData.invalidPswd);
        await expect(loginPage.errMessageBox).toBeExisting();
    });
});