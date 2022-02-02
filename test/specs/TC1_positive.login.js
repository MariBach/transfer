import mainPage from "../../PageObject/main.page.js";
import loginPage from "../../PageObject/login.page.js";

describe('Login testing', () => {
    it('Positive login testing', async () => {
        //Main page
        await mainPage.open();
        await mainPage.signIn();                   
        //Login page        
        await browser.switchToFrame(await $('iframe.signin-iframe'));
        await loginPage.login('bachinskaya.mari@gmail.com', 'Ba4inka');           
        //After login page
        await expect(mainPage.myAccountIcon).toBeExisting(); 
    });
});