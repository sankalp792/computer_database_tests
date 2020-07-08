import Page from './page';

class AddComputerPage extends Page  {

    get nameTextField()  {return $('#name');}
    get introducedDateField()  {return $('#introduced');}
    get discontinuedDateField()  {return $('#discontinued');}
    get companyDropdown(){return $('#company');}
    get createButton()     { return $('//input[@type=\'submit\' and @value=\'Create this computer\']'); }
    get saveButton()     { return $('//input[@type=\'submit\' and @value=\'Save this computer\']'); }
    get deleteButton()     { return $('//input[@type=\'submit\' and @value=\'Delete this computer\']'); }

    open () {
        super.open('/new')
        browser.pause(1000);
    }

    addComputer(name,introduced,discontinued,companyName){
        this.nameTextField.setValue(name);
        this.introducedDateField.setValue(introduced);
        this.discontinuedDateField.setValue(discontinued);
        this.companyDropdown.selectByVisibleText(companyName);
    }

    create(){
        this.createButton.click();
    }

    save(){
        this.saveButton.click();
    }

    delete(){
        this.deleteButton.click();
    }

}

export default new AddComputerPage();