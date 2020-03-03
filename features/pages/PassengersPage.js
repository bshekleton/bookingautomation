module.exports = {

    elementsHomePage: {
        firstoutboundFlightCard: element(by.css("flight-card[data-e2e='flight-card--outbound']")),
        cheapDiv: element(by.css("div[data-e2e='fare-card--standard']"))
    },

    manualadultdetails: async function (title, name, surname, pos) {
        var elements = this.elementsHomePage;
        var dropdown = element.all(by.css("ry-dropdown[data-ref='pax-details__title']")).get(pos - 1);
        await browser.actions().mouseMove(dropdown).click().perform();

        var ti;
        switch (title) {
            case "Mr":
                ti = dropdown.element(by.css("ry-dropdown-item[data-ref='title-item-0']"));
                break;
            case "Mrs":
                ti = dropdown.element(by.css("ry-dropdown-item[data-ref='title-item-1']"));
                break;
            default:
                ti = dropdown.element(by.css("ry-dropdown-item[data-ref='title-item-1']"));
        }
        await browser.actions().mouseMove(ti).click().perform();
        element(by.id("formState.passengers.ADT-" + (pos - 1) + ".name")).sendKeys(name);
        return element(by.id("formState.passengers.ADT-" + (pos - 1) + ".surname")).sendKeys(surname);
    },

    bubbleselect: function (string) {

        return element(by.id("bubble-2")).click();
    },
    
    manualchilddetails: function (name, surname, pos) {
    
        element(by.id("formState.passengers.CHD-" + (pos - 1) + ".name")).sendKeys(name);
        return element(by.id("formState.passengers.CHD-" + (pos - 1) + ".surname")).sendKeys(surname);
    },
    
    selectcontinue: function () {
        return element(by.xpath("//button[text()=' Continue ']")).click();
    }


}
