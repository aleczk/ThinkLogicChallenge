import FileAClaimPage from "../pageObjects/fileAClaim.page";

describe('Test - File A Claim', () => {
    beforeEach(async() => {
        await FileAClaimPage.open(); 
    });

    it('Sucessful Submission - All mandatory fields are valid.', async() => {
        FileAClaimPage.submitMandatoryFields("Alecs", "alecs@test.com", "07/18/2022", "NJ", "Alecsander Camilo");  
    
        await expect(FileAClaimPage.sucessfulSubmission).toHaveText("Your claim has been submitted.")
    });

       

    it('Unsucessful Submission - Email Address not valid.', async() => {
        FileAClaimPage.submitMandatoryFields("Alecs", "", "07/18/2022", "", "Alecsander Camilo");
        
        await expect(FileAClaimPage.unsucessfulSubmission).toHaveText("*required");
    });
});