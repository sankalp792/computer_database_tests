import {Then} from 'cucumber';
import homePage from '../pageobjects/homepage';
import addcomputerpage from "../pageobjects/addcomputerpage";

Then(/^I see message as "([^"]*)"$/, function (message) {
    homePage.getMessage().should.equal(message);
});

Then(/^I should see a list of search results$/, function () {
    homePage.isSearched().should.be.true;
});

Then(/^I see error as "([^"]*)"$/, function (message) {
    homePage.getError().should.equal(message);
});