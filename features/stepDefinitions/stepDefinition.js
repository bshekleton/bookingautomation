var { defineSupportCode, Given, When, Then, After } = require('cucumber');

After(function (scenarioResult) {
    let self = this;

    //if(scenarioResult.result.status === 'failed'){
    return browser.takeScreenshot()
        .then(function (screenshot) {
            const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
            self.attach(decodedImage, 'image/png');
            console.log("scenarioResult  = ", scenarioResult.result.status);
        });
    //}
});

defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(60 * 1000);
});

var homepage = require("../pages/HomePage.js")
Given('I go to {string}', function (site) {
    return homepage.get(site);
});

When('I click One way', function () {
    return homepage.oneway();
});

Then('I set {string} as the departure', function (departure) {
    return homepage.setdeparture(departure);
});

Then('I set {string} as the destination', function (destination) {
    return homepage.setdestination(destination);
});

Then('I set the date to {string}', function (userdate) {
    return homepage.setdate(userdate);
});

Then('I add {int} Adults and {int} Children', async function (numadults, numchildren) {
    return homepage.addpassengers(numadults, numchildren)
});

Then('I click Search', function () {
    return element(by.css("button[aria-label='Search']")).click();
});




var flightpage = require("../pages/FlightPage.js")
Then('I select my flight', function () {
    return flightpage.selectflight();
});

Then('I select the fare type', async function () {
    return flightpage.selectfare();
});




var loginpage = require("../pages/LoginPage.js")
Then('I click on login', function () {
    return loginpage.selectlogin();
});

Then('I login as {string} with password {string}', function (useranme, password) {
    return loginpage.login(useranme, password);
});




var passengerspage = require("../pages/PassengersPage.js")
Then('I fill out Title {string} Name {string} Surname {string} position {int}', function (title, name, surname, pos) {
    return passengerspage.manualadultdetails(title, name, surname, pos);
});

Then('I select saved person {string}', function (string) {
    return passengerspage.bubbleselect(string);
});

Then('I fill out Name {string} Surname {string} position {int}', function (name, surname, pos) {
    return passengerspage.manualchilddetails(name, surname, pos);
});

Then('I click continue', function () {
    return passengerspage.selectcontinue();/*
    return element(by.xpath("//button[text()=' Continue ']")).click();
    */
});




Then('I click on Okay, got it.', function () {
    var until = protractor.ExpectedConditions;
    var ele = element(by.css("button[class='seats-modal__cta ry-button--gradient-blue']"));
    browser.wait(until.presenceOf(ele), 10000, 'Element taking too long to appear in the DOM, I click on Okay, got it.');

    return ele.click();
});


var seatspage = require("../pages/SeatsPage.js")
Then('I select row {int} seat {int}', async function (row, seat) {
    return seatspage.selectseat(row, seat);/*
    var myrow = element(by.css("div[data-ref='seat-map__seat-row-24']"))
    return await myrow.element(by.css('button:nth-of-type(' + seat + ')')).click();
    */
});

Then('I click on continue', function () {
    return seatspage.selectcontinue();/*
    return element(by.css("button[data-ref='seats-action__button-continue']")).click();
    */
});

Then('I say no thanks to fast track', function () {
    return seatspage.nofasttrack();/*
    return element(by.css("button[data-ref='default-takeover__dismiss']")).click();
    */
});




var bagspage = require("../pages/BagsPage.js")
Then('I select small bags', async function () {
    return bagspage.selectsmallbags();/*
    var bag = element.all(by.xpath("//p[text()='1 Small Bag only']")).get(0);
    await browser.actions().mouseMove(bag).click().perform();
    bag = element.all(by.xpath("//p[text()='1 Small Bag only']")).get(1);
    await browser.actions().mouseMove(bag).click().perform();
    bag = element.all(by.xpath("//p[text()='1 Small Bag only']")).get(2);
    return await browser.actions().mouseMove(bag).click().perform();*/
});

Then('I select continue', function () {
    return bagspage.selectcontinue();/*
    return element(by.css("button[class='ry-button--gradient-yellow']")).click();
    */
});

Then('I say No, Thanks to extra bags', async function () {
    return bagspage.noexttrabags();/*
    var until = protractor.ExpectedConditions;
    var ele = element(by.css("button[data-ref='enhanced-takeover-desktop__dismiss-cta']"));
    browser.wait(until.presenceOf(ele), 10000, 'Element taking too long to appear in the DOM');

    return ele.click();
    */
});






Then('I click continue to next', function () {
    var until = protractor.ExpectedConditions;
    var ele = element(by.xpath("//button[text()=' Continue ']"));
    browser.wait(until.presenceOf(ele), 10000, 'Element taking too long to appear in the DOM');

    return ele.click();
});


Then('I click on total', async function () {
    var checkout = element(by.css("ry-basket-total-container"));
    return await browser.actions().mouseMove(checkout).click().perform();

});

Then('I click checkout', function () {
    return element(by.css("button[data-ref='basket-continue-flow__check-out']")).click();
});




var paymentpage = require("../pages/PaymentPage.js")
Then('I fill out the text fields', async function () {
    return paymentpage.filltexts();/*
    await element.all(by.xpath("//input[@name='undefined']")).get(1).sendKeys("5555555555555557");
    element.all(by.xpath("//input[@name='undefined']")).get(0).sendKeys("0871234567");
    element.all(by.xpath("//input[@name='undefined']")).get(2).sendKeys("123");
    element.all(by.xpath("//input[@name='undefined']")).get(3).sendKeys("Joe Bloggs");
    element.all(by.xpath("//input[@name='undefined']")).get(4).sendKeys("home");
    element.all(by.xpath("//input[@name='undefined']")).get(5).sendKeys("town");
    return element.all(by.xpath("//input[@name='undefined']")).get(6).sendKeys("city");
    */
});

Then('I fill out the dropdown fields', async function () {
    return paymentpage.filldropdowns();/*
    var exmonth = element.all(by.xpath("//button[@aria-haspopup='true']")).get(1);
    clickdiv(exmonth);

    //select july text
    clickdiv(exmonth.element(by.xpath("//div[text()='May']")));
    var exyear = element.all(by.xpath("//button[@aria-haspopup='true']")).get(2);
    clickdiv(exyear);

    //select july text
    clickdiv(exyear.element(by.xpath("//div[text()='2023']")));

    var country = element.all(by.xpath("//button[@aria-haspopup='true']")).get(3);
    clickdiv(country);

    clickdiv(country.element(by.xpath("//div[text()='Ireland']")));

    var currency = element.all(by.xpath("//button[@aria-haspopup='true']")).get(4);
    clickdiv(currency);
    clickdiv(currency.element(by.xpath("//div[@class='dropdown-item__label b2'][contains(., 'EUR ')]")));


    return element.all(by.xpath("//input[@name='undefined']")).get(7).sendKeys("eircode");
    */
});

Then('I fill out the checkbox fields', async function () {
    return paymentpage.fillcheckboxes();/*
    var tac = element(by.xpath("//ry-checkbox[@inputid='termsAndConditions']"));
    clickdiv(tac.element(by.css("div[class='_background']")))
    return clickdiv(element(by.xpath("//ry-checkbox[@inputid='insurance-opt-out']")));
    */
});


Then('I click Pay now', function () {
    return paymentpage.paynow();/*
    return element.all(by.xpath("//button[text()=' Pay now ']")).click();
    */
});

Then('I should get payment declined message', function () {
    return paymentpage.declinedmessage();/*
    var until = protractor.ExpectedConditions;

    var alertbox = element(by.xpath("//div[@class='alert alert--error alert--view-simple no-border-left alert--desktop']"));
    browser.wait(until.presenceOf(alertbox), 30000, 'Element taking too long to appear in the DOM');
    browser.actions().mouseMove(alertbox).perform();

    console.log("generating files------------");
    //alerttext = alertbox.element(by.xpath("//div[b]"));
    alertbox.getText().then(function (res) {
        console.log(res);
    });


    return expect(alertbox.getText()).to.eventually.contain("payment");
    */
});

async function clickdiv(elem) {
    await browser.actions().mouseMove(elem).mouseMove({ x: 1, y: 1 }).click().perform();
}
