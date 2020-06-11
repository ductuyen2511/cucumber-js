import LoginPage from '../pages/login/Index'
import UserCollectionPage from '../pages/user_collection/Index'
import data from '../../data/test_data/login/Index';
import UserCollectionFlow from '../flows/user_collection/UserCollectionFlow'

describe(`Check that the user's location is correct after updated`, function () {

    before(`Login to the application`, () => {
        LoginPage
            .goToLoginPage('/login')
            .loginWithCorrectCreds(data[3].username, data[3].password);
        UserCollectionPage
            .goToUserCollectionPage()
            .clickToEditProfile()
    });

    it('Check full name after login',() => {
        new UserCollectionFlow().verifyLocation('Vietnam');
    });

});