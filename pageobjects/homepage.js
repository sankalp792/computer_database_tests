import Page from './page';

class HomePage extends Page  {
    get addNewComputerButton()  { return $('#add') }
    get alertMessage() { return $('.alert-message') }
    get searchBox() { return $('#searchbox') }
    get filterByName() { return $('//input[@type=\'submit\' and @value=\'Filter by name\']')}
    get firstResult() { return $('.computers > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1)')}
    get resultsList() { return $('.computers')}
    get message() { return $('.well')}

    open () {
        super.open('http://computer-database.herokuapp.com/computers')
        browser.pause(1000);
    }

    addNewComputer () {
        this.addNewComputerButton.click();
    }

    getMessage(){
        return this.alertMessage.getText();
    }

    getError(){
        return this.message.getText();
    }

    filter(computerName){
        this.searchBox.setValue(computerName);
        this.filterByName.click();
    }

    isSearched () {
        this.resultsList.waitForDisplayed(1000);
        return this.resultsList.isDisplayed();
    }
}


export default new HomePage();