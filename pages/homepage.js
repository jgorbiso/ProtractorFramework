let hompage = function () {
    let firstNumber_textfield = element(by.model('first'));
    let secondNumber_textfield = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function (url) {
        browser.get(url);
    };

    this.enterFirstNumber = function (number) {
        firstNumber_textfield.sendKeys(number);
    };

    this.enterSecondNumber = function (number) {
        secondNumber_textfield.sendKeys(number);
    };

    this.clickGoButton = function () {
        goButton.click();
    };

    this.verifyResult = function (result) {
        let output = element(by.cssContainingText(".ng-binding", result));
        expect(output.getText()).toEqual("5");
    };

};

module.exports = new hompage();