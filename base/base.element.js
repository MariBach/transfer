export default class BaseElement {
    constructor(wdioElement, name) {
        this.wdioElement = wdioElement;
        this.elementName = name;
    }    
    async click() {
        console.log(`Click on the element "${this.elementName}"`);
        await this.wdioElement.click();
    }
    async isExisting() {
        return await this.wdioElement.isExisting();
    }
    async isDisplayed() {
        return await this.wdioElement.isDisplayed();
    }
    async waitForDisplayed() {
        return await this.wdioElement.waitForDisplayed({timeout:5000});
    }
    async waitForClickable() {
        return await this.wdioElement.waitForClickable({ timeout: 10000 });
    }
    async isClickable() {
        return await this.wdioElement.isClickable();
    }
    async getText() {
        let innerText = await this.wdioElement.getText();
        let innerTextCut = await innerText.substring(0, innerText.length-2);
        let innerTextCutEdit = await innerTextCut.replace(',','.');
        let stringToNumber = Number(innerTextCutEdit);
        return stringToNumber;
    }
}