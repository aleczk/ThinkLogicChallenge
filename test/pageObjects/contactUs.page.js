import BasePage from "./base.page";

class ContactUsPage extends BasePage {
    open() { return super.open("/contact") }

    // Mandatory Fields
    get inputName() { 
        return $('#c__name_d827bea9') 
    };

    get inputEmailAddress() { 
        return $('#c__email_d827bea9') 
    };

    dropdownReasonForContact(reasonForContact) {  
        $('div > .null-value').click();
        $(`//li[normalize-space()='${reasonForContact}']`).click();
    };

    get inputQuestions() {
        return $("//textarea[@id='c__questions_d827bea9']");
    }

    get submitButton() {
        return $('.cms-component-411edc1a-button')
    }

    get sucessfulSubmission() {
        return $("//*[contains(text(),'Thank you')]")
    }

    get unsucessfulSubmission() {
        return $("#c__topic_d827bea9_error")   
    }

    async submitMandatoryFields(name, emailAddress, reasonForContact, questionsComments) {
        await this.inputName.setValue(name);
        await this.inputEmailAddress.setValue(emailAddress);
        await this.dropdownReasonForContact(reasonForContact);
        await this.inputQuestions.setValue(questionsComments);
        await browser.pause(1000);
        await this.submitButton.click();
    }

}

export default new ContactUsPage();