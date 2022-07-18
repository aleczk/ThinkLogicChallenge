import BasePage from "./base.page";

class FileAClaimPage extends BasePage {
    open() { return super.open("/claim-form") }

    get inputName() { 
        return $('#c__Name_ee85a0da');
    };

    get inputEmailAddress() { 
        return $('#c__Email_ee85a0da');
    };

    addAPurchase(datePurchased, statePurchased) {  
        $("//button[normalize-space()='Add A Purchase']").click();
        $("//input[@type='date']").click();
        $("//input[@type='date']").setValue(datePurchased);
        $('div > .null-value').click();
        $(`//li[normalize-space()='${statePurchased}']`).click();
    };

    get attestCheckbox() {
        return $("//span[@tabindex='0']");
    };

    get inputSignature() {
        return $('#c__SignatureText_ee85a0da');
    };

    get submitButton() {
        return $("//button[normalize-space()='Submit']");
    };

    get sucessfulSubmission() {
        return $('#c__formAppee85a0da');
    };

    get unsucessfulSubmission() {
        return $("#c__Email_ee85a0da_error");   
    };

    async submitMandatoryFields(name, emailAddress, datePurchased, statePurchased, signature) {
        await this.inputName.setValue(name);
        await this.inputEmailAddress.setValue(emailAddress);
        await this.addAPurchase(datePurchased, statePurchased);
        await this.attestCheckbox.click();
        await this.inputSignature.setValue(signature);
        await browser.pause(1000);
        await this.submitButton.click();
    };
};

export default new FileAClaimPage();