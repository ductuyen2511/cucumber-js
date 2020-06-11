import ElementHandling from '../../../utils/ElementHandling';

const $ = ElementHandling.singleElement;
const USER_NAME_TEXT_BOX = 'input#user_email';
const PASSWORD_TEXT_BOX = 'input#user_password';
const LOGIN_BUTTON = 'input[value=\'Login\']';

class Index {

    inputUserName(value) {
        $(USER_NAME_TEXT_BOX).setValue(value);
        return this;
    }

    inputPassword(value) {
        $(PASSWORD_TEXT_BOX).setValue(value);
        return this;
    }

    clickOnLoginButton() {
        $(LOGIN_BUTTON).click();
        return this;
    }

    loginWithCorrectCreds(userName, password) {
        this.inputUserName(userName);
        this.inputPassword(password);
        this.clickOnLoginButton();
        return this;
    }

    clickOnLoginButton() {
        $(LOGIN_BUTTON).click();
        return this;
    }

    goToLoginPage(url) {
        browser.url(url);
        return this;
    }
}

export default new Index();