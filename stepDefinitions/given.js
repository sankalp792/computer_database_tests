import { Given} from 'cucumber';
import homePage from '../pageobjects/homepage';
import addcomputerpage from "../pageobjects/addcomputerpage";

Given(/^I am on the home page$/, function () {
    homePage.open();
    browser.getTitle().should.equal('Computers database');
});