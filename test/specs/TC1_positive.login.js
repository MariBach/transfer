import mainPage from "../../PageObject/main.page.js";
import loginPage from "../../PageObject/login.page.js";
import InputData from "../../PageObject/inputdata.js";

describe('Login testing', () => {
    it('Positive login testing', async () => {
        //Open main page
        await mainPage.open();
        await mainPage.signIn();                   
        //Open login page        
        await browser.switchToFrame(await loginPage.signInFrame);        
        await loginPage.login(InputData.validMail, InputData.validPswd);       
        //User logged in, main page updated
        await expect(mainPage.myAccountIcon).toBeExisting(); 
    });
});

//await browser.switchToFrame(await $('iframe.signin-iframe'));