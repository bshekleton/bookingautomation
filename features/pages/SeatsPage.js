module.exports = {


    selectseat: async function (row, seat) {
        var myrow = element(by.css("div[data-ref='seat-map__seat-row-"+row+"']"))
        return await myrow.element(by.css('button:nth-of-type(' + seat + ')')).click();
    },
    
    
    selectcontinue: function () {
        return element(by.css("button[data-ref='seats-action__button-continue']")).click();
    },
    
    
    nofasttrack: function () {
        return element(by.css("button[data-ref='default-takeover__dismiss']")).click();
    }
    
    




}