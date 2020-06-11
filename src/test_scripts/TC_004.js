import LoginPage from '../pages/login/Index'
import UserCollectionPage from '../pages/user_collection/Index'
import data from '../../data/test_data/login/Index';
import PhotoFlow from '../flows/photo/PhotoFlow';
import apiRequest from '../../utils/ApiRequestHandling';
import dataPhoto from '../../data/test_data/api_model/photo_info';
import token from '../../data/test_data/authorize/Index';
import UserCollectionFlow from '../flows/user_collection/UserCollectionFlow';
import addPhotoToCollection from  '../../data/test_data/api_model/add_photo_to_collection';
var collection_id = null;

describe(`Check the removed photo from the existed collection`, function () {

    beforeEach(async() => {
        const dataCollection =  await apiRequest
            .AddNewCollection(`${browser.config.baseAPIUrl}`, token, addPhotoToCollection);
        collection_id =  dataCollection.id;
        const dataAddNewPhoto_01 =  await apiRequest
            .AddPhotoToCollection(`${browser.config.baseAPIUrl}`, token, collection_id, "Fg0z0GBydqQ");
        const dataAddNewPhoto_02 =  await apiRequest
            .AddPhotoToCollection(`${browser.config.baseAPIUrl}`, token, collection_id, "oVMeQqMsgVA");
        /*const dataRemovePhoto = await apiRequest
            .makeDeleteRequestPhoto(`${browser.config.baseAPIUrl}`, dataPhoto.getDataFromPhotoId(collection_id, "Fg0z0GBydqQ"), token);
        console.log(`remove photo: ` + dataRemovePhoto);*/
    });

    /*afterEach(`Login to the application`, function() {
        LoginPage
            .goToLoginPage('/login')
            .loginWithCorrectCreds(data[3].username, data[3].password);
        UserCollectionPage
            .goToUserCollectionPage()
            .clickToCollectionTab()
    })*/

    it(``,() => {
        

    });

});