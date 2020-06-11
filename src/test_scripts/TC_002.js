import LoginPage from '../pages/login/Index'
import HomePage from '../pages/home/Index'
import data from '../../data/test_data/login/Index';
import apiRequest from '../../utils/ApiRequestHandling';
import token from '../../data/test_data/authorize/Index';
import HomePageFlow from '../flows/home_page/HomePageFlow';
var photoInfo = null;
var actualListTags = null; 
var expectedListTags = null;


describe(`Check that all related tags of a photo are correct`, function () {  
    let photo_id;
    beforeEach(async() => {
        const randomPhoto =  await apiRequest
            .getRandomPhoto(`${browser.config.baseAPIUrl}`, token);
        photo_id = randomPhoto.id;
        photoInfo = await apiRequest
            .getPhotoInfo(`${browser.config.baseAPIUrl}`, token, photo_id);
    });

    describe(`${photo_id}`, function (){
        beforeEach(`Login to the application ${photo_id}`, function() {
            LoginPage
                .goToLoginPage('/login')
                .loginWithCorrectCreds(data[3].username, data[3].password);
            HomePage
                .openPhotoURL(`${browser.config.baseUrl}/photos/${photo_id}`)
            
            actualListTags = HomePage.getRelatedTagFromUI();
            expectedListTags = HomePage.getRelatedTagFromAPI(photoInfo);
        });
    
        it('verify all related tag',() => {
            
           new HomePageFlow().verifyRelatedTags(actualListTags, expectedListTags);
        });
    });
});