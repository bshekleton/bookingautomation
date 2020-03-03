module.exports = {

    elementsHomePage: {
        onewayButton: element(by.css("button[aria-label='One way']")),
        departureInput: element(by.css("input[id='input-button__departure']")),
        destinationInput: element(by.css("input[id='input-button__destination']")),
        dateContainerDiv: element(by.css("div[data-ref='input-button__dates-from']")),
        dateTooltip: element(by.id("ry-tooltip-8")),
        passengersContainerDiv: element(by.css("div[data-ref='input-button__passengers']")),
        passengersTooltip: element(by.id("ry-tooltip-9")),
        searchButton: element(by.css("button[aria-label='Search']"))
    },

    get: function (site) {
        return browser.get(site);
    },

    oneway: function () {
        var elements = this.elementsHomePage;
        return elements.onewayButton.click();
    },

    setdeparture: function (departure) {
        var elements = this.elementsHomePage;
        var departureelement = elements.departureInput;
        return departureelement.sendKeys("a",
            protractor.Key.CONTROL, "a", protractor.Key.NULL,
            departure);
    },

    setdestination: function (destination) {
        var elements = this.elementsHomePage;
        return elements.destinationInput.sendKeys(destination + protractor.Key.TAB);
    },



    setdate: function (userdate) {
/*
        var alertbox =  element.all(by.css('span[class="ry-header__menu-item-title ng-star-inserted"]')).get(0);
        expect(alertbox.getText()).to.eventually.contain("lan");
        */
        var elements = this.elementsHomePage;
        var myel = elements.dateContainerDiv.element(by.xpath('..'));
        myel.click();

        var newel = elements.dateTooltip;
        return newel.element(by.xpath("//div[@data-id='" + userdate + "']")).click();
    },

    addpassengers: async function (numadults, numchildren) {
        var elements = this.elementsHomePage;
        var myel = elements.passengersContainerDiv.element(by.xpath('..'));
        myel.click();

        var newel = elements.passengersTooltip;
        var adultcomp = newel.element(by.css("ry-counter[data-ref='passengers-picker__adults']"))
        var childcomp = newel.element(by.css("ry-counter[data-ref='passengers-picker__children']"))
        var adultadd = adultcomp.element(by.css("ry-counter-button[data-ref='counter.counter__increment']"))
        var childadd = childcomp.element(by.css("ry-counter-button[data-ref='counter.counter__increment']"))

        for (i = 1; i < numadults; i++) {
            clickdiv(adultadd);
            //await browser.actions().mouseMove(adultadd).click().perform();
        }

        for (i = 0; i < numchildren; i++) {
            await browser.actions().mouseMove(childadd).click().perform();
        }

        return adultadd;
    },

    search: function () {
        var elements = this.elementsHomePage;
        return element.searchButton.click();
    }
}

async function clickdiv(elem){
    await browser.actions().mouseMove(elem).mouseMove({x: 1, y: 1}).click().perform();
}
