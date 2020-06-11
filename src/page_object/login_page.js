import Page from './page';
import ElementHandling from '../../utils/ElementHandling';
const $ = ElementHandling.singleElement;

const USER_NAME_TEXT_BOX = 'input#user_email';
const PASSWORD_TEXT_BOX = 'input#user_password';
const LOGIN_BUTTON = 'input[value=\'Login\']';

class LoginPage extends Page{

    open() {
        super.open('login')
    }

    login (username, password) {
        $(USER_NAME_TEXT_BOX).setValue(username);
        $(PASSWORD_TEXT_BOX).setValue(password);
        $(LOGIN_BUTTON).click();
      }

}

export default new LoginPage()