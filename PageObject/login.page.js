import BasePage from "../base/base.page.js";
import BaseElement from "../base/base.element.js";
import Input from "../Elements/input.js";
import Button from "../Elements/button.js";

class LoginPage extends BasePage{
    //sign-in frame
        get signInFrame() {
            let element = $('iframe.signin-iframe');
            return element
            //return new BaseElement($('iframe.signin-iframe'), "Sign-In Frame");
        }    
    //user credentials
        get emailInput() {            
            return new Input ($('#ap_email'),"Input email");
            //return new Input($('//input[@type="email"]'), "Input email");
        }
        get pswdInput() {
            return new Input ($('#ap_password'), "Password input");        
            //return new Input($('//input[@placeholder="Book Depository password"]'), "Password input");
        }
    //button to Sign-In    
        get signInBtn() {
            return new Button($('#signInSubmit'), "Sign-In");
        }
    //notification about wrong input    
        get errMessageBox() {      
            return new BaseElement($('#auth-error-message-box'),"Notification");
        }
    //input login info and click to login  
        async login(email, password) {
            await this.emailInput.setValue(email);
            await this.pswdInput.setValue(password);
            await this.signInBtn.click();
        }
    //check error message (wrong input data) in login window      
        async checkErrLogin() {
            let errMessageExist = await this.errMessageBox.isExisting();
            return errMessageExist;
        }
    }
    export default new LoginPage();
    