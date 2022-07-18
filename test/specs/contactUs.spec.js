import ContactUsPage from "../pageObjects/contactUs.page";

describe('Test - Contact Us Form', () => {
    beforeEach(async() => {
        await ContactUsPage.open();
        
    });

    it('Sucessful test - All mandatory fields are valid.', async() => {
        ContactUsPage.submitMandatoryFields("Alecs", "alecs@test.com", "Change Address", "This is a test.");

        await expect(ContactUsPage.sucessfulSubmission).toHaveTextContaining("Thank you for taking the time to contact us. We will review your request and respond shortly. More information about this case can be found on the Home page.")
    });

    it('Unsucessful test - Reason for Contact not valid.', async() => {
        ContactUsPage.submitMandatoryFields("Alecs", "alecs@test.com", "", "This is a test.");
        
        await expect(ContactUsPage.unsucessfulSubmission).toHaveTextContaining("Please select a reason for contact.");
    });
});