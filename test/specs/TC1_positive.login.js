import mainPage from "../../PageObject/main.page.js";
import loginPage from "../../PageObject/login.page.js";
import InputData from "../../PageObject/inputdata.js";

describe('Login testing', () => {
    it('Positive login testing', async () => {
        //Main page
        await mainPage.open();
        await mainPage.signIn();                   
        //Login page
        //await browser.switchToFrame(await loginPage.signInFrame);        
        await browser.switchToFrame(await $('iframe.signin-iframe'));
        await loginPage.login(InputData.validMail, InputData.validPswd);
        //await loginPage.login('bachinskaya.mari@gmail.com', 'Ba4inka');        
        //After login page
        await expect(mainPage.myAccountIcon).toBeExisting(); 
    });
});