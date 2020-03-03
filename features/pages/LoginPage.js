module.exports = {

    elementsHomePage: {
        loginButton: element(by.css("button[data-ref='login-touchpoint__log_in_button']")),
        usernameInput: element(by.css("input[name='email']")),
        passwordInput: element(by.css("input[name='password']")),
        submitButton: element(by.css("button[type='submit']"))
    },

    selectlogin: function () {
        var elements = this.elementsHomePage;
        return elements.loginButton.click();
    },
    
    login: function (useranme, password) {
        var elements = this.elementsHomePage;
    
        elements.usernameInput.sendKeys(useranme);
        elements.passwordInput.sendKeys(password);
    
        return elements.submitButton.click();
    }
}