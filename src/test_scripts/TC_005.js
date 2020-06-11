import LoginPage from '../pages/login/Index'
import HomePage from '../pages/home/Index'
import data from '../../data/test_data/login/Index';
import apiRequest from '../../utils/ApiRequestHandling';
import token from '../../data/test_data/authorize/Index';
import HomePageFlow from '../flows/home_page/HomePageFlow';

var beforeLike = null;
var afterLike = null;


describe(`Check like a random photo`, function () {
    let photo_id;
    beforeEach(async() => {
        const randomPhoto =  await apiRequest
            .getRandomPhoto(`${browser.config.baseAPIUrl}`, token);
        photo_id = randomPhoto.id;
        const photoBeforeLike = await apiRequest
            .getPhotoInfo(`${browser.config.baseAPIUrl}`, token, photo_id);
        beforeLike = photoBeforeLike.likes;
    });

    describe(``, function(){
        beforeEach(`Login to the application` , () => {
            LoginPage
                 .goToLoginPage('/login')
                 .loginWithCorrectCreds(data[3].username, data[3].password);
             HomePage
                .openPhotoURL(`${browser.config.baseUrl}/photos/${photo_id}`)
                .likeAPhoto()
         });

        beforeEach(async() =>{
            const photoAfterLike = await apiRequest
                .getPhotoInfo(`${browser.config.baseAPIUrl}`, token, photo_id);
            afterLike = photoAfterLike.likes;
         });
     
         it(`Verify number of likes photo`,() => {  
            new HomePageFlow().verifyNumberOfLikesPhoto(beforeLike, afterLike);
         });
    })

});