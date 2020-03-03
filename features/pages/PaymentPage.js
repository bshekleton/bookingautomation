var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = {

    filltexts: async function () {
        await element.all(by.xpath("//input[@name='undefined']")).get(1).sendKeys("5555555555555557");
        element.all(by.xpath("//input[@name='undefined']")).get(0).sendKeys("0871234567");
        element.all(by.xpath("//input[@name='undefined']")).get(2).sendKeys("123");
        element.all(by.xpath("//input[@name='undefined']")).get(3).sendKeys("Joe Bloggs");
        element.all(by.xpath("//input[@name='undefined']")).get(4).sendKeys("home");
        element.all(by.xpath("//input[@name='undefined']")).get(5).sendKeys("town");
        return element.all(by.xpath("//input[@name='undefined']")).get(6).sendKeys("city");
    },

    filldropdowns: async function () {
        var exmonth = element.all(by.xpath("//button[@aria-haspopup='true']")).get(1);
        clickdiv(exmonth);
        clickdiv(exmonth.element(by.xpath("//div[text()='May']")));

        var exyear = element.all(by.xpath("//button[@aria-haspopup='true']")).get(2);
        clickdiv(exyear);
        clickdiv(exyear.element(by.xpath("//div[text()='2023']")));

        var country = element.all(by.xpath("//button[@aria-haspopup='true']")).get(3);
        clickdiv(country);
        clickdiv(country.element(by.xpath("//div[text()='Ireland']")));

        var currency = element.all(by.xpath("//button[@aria-haspopup='true']")).get(4);
        clickdiv(currency);
        clickdiv(currency.element(by.xpath("//div[@class='dropdown-item__label b2'][contains(., 'EUR ')]")));

        return element.all(by.xpath("//input[@name='undefined']")).get(7).sendKeys("eircode");
    },

    fillcheckboxes: async function () {
        var tac = element(by.xpath("//ry-checkbox[@inputid='termsAndConditions']"));
        clickdiv(tac.element(by.css("div[class='_background']")))
        return clickdiv(element(by.xpath("//ry-checkbox[@inputid='insurance-opt-out']")));
    },

    paynow: function () {
        return element.all(by.xpath("//button[text()=' Pay now ']")).click();
    },

    declinedmessage: function () {
        var until = protractor.ExpectedConditions;

        var alertbox = element(by.xpath("//div[@class='alert alert--error alert--view-simple no-border-left alert--desktop']"));
        browser.wait(until.presenceOf(alertbox), 30000, 'Element taking too long to appear in the DOM');
        browser.actions().mouseMove(alertbox).perform();
        alertbox.getText().then(function (res) {console.log(res);});
        return expect(alertbox.getText()).to.eventually.contain("payment");
    },



}
async function clickdiv(elem) {
    await browser.actions().mouseMove(elem).mouseMove({ x: 1, y: 1 }).click().perform();
}