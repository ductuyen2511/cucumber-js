import LoginPage from '../pages/login/Index'
import UserCollectionPage from '../pages/user_collection/Index'
import data from '../../data/test_data/login/Index';
import apiRequest from '../../utils/ApiRequestHandling';
import token from '../../data/test_data/authorize/Index';
import addPhotoToCollection from  '../../data/test_data/api_model/add_photo_to_collection';
import UserCollectionFlow from '../flows/user_collection/UserCollectionFlow';
var collection_id = null;
var photo_id = `Fg0z0GBydqQ`;
var collection_url = null;
var photo_url = null;


describe(`Check that the user can create a new collection and add a photo into it.`, function () {
    beforeEach(async() => {
        const dataCollection =  await apiRequest
            .AddNewCollection(`${browser.config.baseAPIUrl}`, token, addPhotoToCollection); 
        collection_id =  dataCollection.id;
        collection_url = dataCollection.links.html;
        const dataAddNewPhoto =  await apiRequest
            .AddPhotoToCollection(`${browser.config.baseAPIUrl}`, token, collection_id, photo_id);
        photo_url = dataAddNewPhoto.photo.links.html;
    });

    describe(``, function (){
        beforeEach(`Login to the application`, function() {
            LoginPage
                .goToLoginPage('/login')
                .loginWithCorrectCreds(data[3].username, data[3].password);
            UserCollectionPage
                .goToUserCollectionPage()
                .clickToCollectionTab()
        })
    
        it(`Verify photo_id and collection_is are correctly.`,() => {
            new UserCollectionFlow().verifyCollection(collection_url, collection_id);
            new UserCollectionFlow().verifyPhoto(photo_url, photo_id);
        });   
    });
});