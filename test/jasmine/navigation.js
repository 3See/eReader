describe('Etect website', function() {

  it('should register a new subject', function() {
    browser.get('http://localhost:3000/');
    browser.sleep(1000);
    element(by.buttonText('Subject Registration')).click();
    browser.sleep(1000);

    element(by.model('information.firstname')).sendKeys('Kyle');
    element(by.model('information.middlename')).sendKeys('H');
    element(by.model('information.lastname')).sendKeys('Testor');
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
    element(by.model('information.email')).sendKeys('khtestor@fakedata.com');
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
    
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 5000);
    var alertDialog = browser.switchTo().alert();
    browser.sleep(1000);
    expect(alertDialog.getText()).toEqual('Subject registered');
    alertDialog.dismiss();
  });

  it('should not register duplicate subject', function() {
    browser.sleep(1000);
    element(by.buttonText('Subject Registration')).click();
    browser.sleep(1000);

    element(by.model('information.firstname')).sendKeys('Kyle');
    element(by.model('information.middlename')).sendKeys('H');
    element(by.model('information.lastname')).sendKeys('Testor');
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
    element(by.model('information.email')).sendKeys('khtestor@fakedata.com');
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

    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 5000);
    var alertDialog = browser.switchTo().alert();
    browser.sleep(1000);
    expect(alertDialog.getText()).toEqual('Subject already exists');
    alertDialog.dismiss();
  });

  it('should enroll a subject', function () {
    browser.sleep(1000);
    element(by.buttonText('Subject Enrollment')).click();
    browser.sleep(1000);
    element.all(by.repeater('subject in subjects')).last().click();
    element.all(by.repeater('study in studies')).get(0).click();
    browser.sleep(1000);
    element.all(by.repeater('group in groups')).get(0).click();
    element.all(by.repeater('reader in readers')).get(0).click();
    element(by.model('info.areacode')).sendKeys('326');
    element(by.model('info.phone')).sendKeys('1234567');
    element(by.model('info.start')).sendKeys('12-30-2015');
    element(by.id('enroll')).click();

    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 5000);
    var alertDialog = browser.switchTo().alert();
    browser.sleep(1000);
    expect(alertDialog.getText()).toEqual('Subject enrolled in study');
    alertDialog.dismiss();
  });

  it('should find enrolled subject in proper study/group', function() {
    browser.sleep(1000);
    element(by.buttonText('Study One')).click();
    browser.sleep(1000);
    element(by.buttonText('Group A')).click();
    browser.sleep(1000);
    element.all(by.repeater('pat in patients')).last().element(by.id('patient-button')).click();
    browser.sleep(1000);
    expect(element(by.id('testsubjectinfo')).getText()).toEqual('Full Name: Kyle H Testor');
    browser.sleep(1000);
  });

  it('should edit the subject\'s information', function() {
    element(by.buttonText('Edit')).click();
    browser.sleep(1000);
    element(by.model('information.firstname')).clear();
    element(by.model('information.firstname')).sendKeys('Cory');
    browser.sleep(1000);
    element(by.buttonText('Save')).click();

    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 5000);
    var alertDialog = browser.switchTo().alert();
    browser.sleep(1000);
    expect(alertDialog.getText()).toEqual('Subject edited');
    alertDialog.dismiss();
  });

  it('should find subject in record status as complete', function() {
    browser.sleep(1000);
    element(by.buttonText('Record Status')).click();
    browser.sleep(1000);
    element(by.buttonText('Complete')).click();
    browser.sleep(1000);
    element.all(by.repeater('subject in subjects')).last().element(by.id('subject-button')).click();
    browser.sleep(2000);
    expect(element(by.id('testsubjectinfo')).getText()).toEqual('Full Name: Cory H Testor');
  });

  it('should filter the groups and patients based on current state', function() {
    element(by.buttonText('Dashboard')).click();
    browser.sleep(1000);
    element(by.buttonText('Study One')).click();
    browser.sleep(1000);
    element(by.buttonText('Group C')).click();
    browser.sleep(2000);
    browser.navigate().back();
    browser.sleep(1000);
    element(by.buttonText('Group B')).click();
    browser.sleep(2000);
    browser.navigate().back();
    browser.sleep(1000);
    element(by.buttonText('Group A')).click();
    browser.sleep(2000);
    element(by.buttonText('1')).click();
    browser.sleep(2000);
    browser.navigate().back();
    browser.sleep(1000);
    element(by.buttonText('40')).click();
    browser.sleep(2000);
    browser.navigate().back();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
    element(by.buttonText('Study A')).click();
    browser.sleep(2000);
    element(by.buttonText('G1')).click();
    browser.sleep(2000);
    browser.navigate().back();
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
    element(by.buttonText('Study B')).click();
    browser.sleep(2000);
    browser.navigate().back();
  });

  it('should navigate via the breadcrumb', function() {
    browser.sleep(2000);
    element.all(by.repeater('study in studys')).last().element(by.id('patient-button')).click();
    browser.sleep(2000);
    element.all(by.repeater('group in grps')).last().element(by.id('patient-button')).click();
    browser.sleep(2000);
    element.all(by.repeater('patient in patnts')).last().element(by.id('patient-button')).click();
    browser.sleep(2000);
  })

});