
module.exports = {


selectsmallbags: async function () {
    var bag = element.all(by.xpath("//p[text()='1 Small Bag only']")).get(0);
    await browser.actions().mouseMove(bag).click().perform();
    bag = element.all(by.xpath("//p[text()='1 Small Bag only']")).get(1);
    await browser.actions().mouseMove(bag).click().perform();
    bag = element.all(by.xpath("//p[text()='1 Small Bag only']")).get(2);
    return await browser.actions().mouseMove(bag).click().perform();
},

selectcontinue: function () {
    return element(by.css("button[class='ry-button--gradient-yellow']")).click();
},

noexttrabags: async function () {
    var until = protractor.ExpectedConditions;
    var ele = element(by.css("button[data-ref='enhanced-takeover-desktop__dismiss-cta']"));
    browser.wait(until.presenceOf(ele), 10000, 'Element taking too long to appear in the DOM');

    return ele.click();
}

}