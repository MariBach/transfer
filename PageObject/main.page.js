import BasePage from "../base/base.page.js";
import BaseElement from "../base/base.element.js";
import Input from "../Elements/input.js";
import Button from "../Elements/button.js";

class MainPage extends BasePage {
    get toSignInBtn(){
        return new Button($('(//a[text()="Sign in/Join"])[1]'), 'Navigate to login page');
    }
    get toSignOutBtn(){
        return new Button($('(//a[text()="Sign out"])[1]'), 'Sign out')
    }
    get searchInput(){
        return new Input($('input.text-input'), 'Input item to search'); 
    }
    get searchButton(){
        return new Button($('button.header-search-btn'), "Search");
    }
    get myAccountIcon(){
        return new Button($('(//a[text()="My Account"])[1]'), "User's Account")
    }
    get productPrice() {
        return new BaseElement($('(//p[@class="price"])[5]'),"Searched item's price");
    }
    //open home page
    async open() {
        await super.open(`https://www.bookdepository.com`);
    }
    async signIn(){
        await this.toSignInBtn.click();
    }
    async signOut(){
        await this.toSignOutBtn.click();
    }
    async inputSearchItem(search_info){
        await this.searchInput.setValue(search_info);
    }
    async startSearch(){
        await this.searchButton.click();
    }
    async checkSuccessfulLogIn(){
        await this.myAccountIcon.isExisting();
    }
    async getProductPrice (){
        let priceWithCur = await this.productPrice.getText();
        let priceWoCur = await priceWithCur.substring(0, priceWithCur.length-2);
        let priceFormat = await priceWoCur.replace(',','.');
        let priceNumber = Number(priceFormat);
        return priceNumber;
    }
}
export default new MainPage();