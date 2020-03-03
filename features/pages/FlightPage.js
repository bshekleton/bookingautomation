module.exports = {

    elementsHomePage: {
        firstoutboundFlightCard: element(by.css("flight-card[data-e2e='flight-card--outbound']")),
        cheapDiv: element(by.css("div[data-e2e='fare-card--standard']"))
    },

    selectflight: function () {
        var elements = this.elementsHomePage;
        return elements.firstoutboundFlightCard.click()
    },


    selectfare: async function () {
        var elements = this.elementsHomePage;
        var cheap = elements.cheapDiv;

        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(cheap), 2000, 'Element taking too long to appear in the DOM');
        return await browser.actions().mouseMove(cheap).click().perform();
    },
}