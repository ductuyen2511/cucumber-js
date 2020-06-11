import { When, Given} from 'cucumber';
import userCollectionPage from '../page_object/usercollection_page'
import homePage from '../page_object/home_page'
const scope = require('../hooks/scope');

When('I click on edit profile button', ()=>{
    userCollectionPage.clickToEditProfile();
});

Given,When('I open the random photo url', async ()=> {
    const photo_id = scope['photo_id'];
    homePage.open(photo_id);
  })

When('I like a photo', ()=> {
    homePage.likeAPhoto();
  })


