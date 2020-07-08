import {When} from 'cucumber';
import homePage from '../pageobjects/homepage';
import addcomputerpage from "../pageobjects/addcomputerpage";

When(/^I click the Add a new computer button$/, function () {
    homePage.addNewComputer();
});

When(/^I enter "([^"]*)" in computer name$/, function (name) {
    addcomputerpage.nameTextField.setValue(name);
    browser.pause(1000);
    addcomputerpage.nameTextField.getValue().should.equal(name);
});

When(/^I enter "([^"]*)" in introduced date field$/, function (date) {
    addcomputerpage.introducedDateField.setValue(date);
    browser.pause(1000);
    addcomputerpage.introducedDateField.getValue().should.equal(date);
});

When(/^I enter "([^"]*)" in discontinued date field$/, function (date) {
    addcomputerpage.discontinuedDateField.setValue(date);
    browser.pause(1000);
    addcomputerpage.discontinuedDateField.getValue().should.equal(date);
});

When(/^I choose company as "([^"]*)"$/, function (companyName) {
    addcomputerpage.companyDropdown.selectByVisibleText(companyName);
});

When(/^I click the Create this computer button$/, function(){
    addcomputerpage.create();
});

When(/^I search for "([^"]*)"$/, function (computerName) {
    homePage.filter(computerName);
});

When(/^I click on the first result$/, function(){
    homePage.firstResult.click();
});

When(/^I wait$/, function(){
    browser.pause(10000);
});

When(/^I click the Save this computer button$/, function(){
    addcomputerpage.save();
});

When(/^I click the Delete this computer button$/, function(){
    addcomputerpage.delete();
});