describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:3000/');

    element(by.buttonText('Subject Registration')).click();
    browser.sleep(1000);



    element(by.model('information.firstname')).sendKeys('Charles');
    element(by.model('information.middlename')).sendKeys('C');
    element(by.model('information.lastname')).sendKeys('Jones');
    element(by.model('information.height')).sendKeys('68');
    element(by.model('information.weight')).sendKeys('160');
    element(by.model('information.age')).sendKeys('35');
    //male/female radio button
    element(by.id('optionsRadios1')).click();
    element(by.model('information.streetaddress1')).sendKeys('1131 W University Ave');
    element(by.model('information.streetaddress2')).sendKeys('1');
    element(by.model('information.city')).sendKeys('Summerville');
    //city dropdown
    var mystate = element(by.model('information.state'));
    mystate.$('[value="SC"]').click();
    element(by.model('information.zipcode')).sendKeys('32607');
    element(by.model('information.areacode1')).sendKeys('813');
    element(by.model('information.phone1')).sendKeys('2141125');
    element(by.model('information.email')).sendKeys('cjones@fakedata.com');
    element(by.model('information.areacode2')).sendKeys('214');
    element(by.model('information.phone2')).sendKeys('8530352');
    //skipping email2

    //relation dropdown
    var relation1 = element(by.model('information.relation1'));
    relation1.$('[value="Mother"]').click();
    element(by.model('information.r1firstname')).sendKeys('Cynthia');
    element(by.model('information.r1middleinitial')).sendKeys('C');
    element(by.model('information.r1lastname')).sendKeys('Jones');
    element(by.model('information.contact_areacode1')).sendKeys('813');
    element(by.model('information.r1phone')).sendKeys('8520253');
    //relation2 dropdown
    var relation2 = element(by.model('information.relation2'));
    relation2.$('[value="Spouse"]').click();
    element(by.model('information.r2firstname')).sendKeys('Melissa');
    element(by.model('information.r2middleinitial')).sendKeys('A');
    element(by.model('information.r2lastname')).sendKeys('Jones');
    element(by.model('information.contact_areacode2')).sendKeys('214');
    element(by.model('information.r2phone')).sendKeys('0236565');
    
    element(by.id('register')).click();
    browser.sleep(20000);




    //element(by.css('[value="add"]')).click();

    //var todoList = element.all(by.repeater('todo in todoList.todos'));
    //expect(todoList.count()).toEqual(3);
    //expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    //todoList.get(2).element(by.css('input')).click();
    //var completedAmount = element.all(by.css('.done-true'));
    //expect(completedAmount.count()).toEqual(2);
  });
});