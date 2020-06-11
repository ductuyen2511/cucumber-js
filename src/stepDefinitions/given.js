import { Given } from 'cucumber';
import loginPage from '../page_object/login_page'
import homePage from '../page_object/home_page'
import userCollectionPage from '../page_object/usercollection_page'
import dataUser from '../dataprovider/user'
import apiRequest from '../../utils/ApiRequestHandling';
import addNewCollectionModel from  '../../data/test_data/api_model/add_photo_to_collection';
import photoModel from '../../data/test_data/api_model/photo_info'
import token from '../../data/test_data/authorize/Index';
const scope = require('../hooks/scope');


Given('I open the home page', ()=>{
  loginPage.open()
})

Given('I input username is {string}',(userName) => {
  if(dataUser.USER[userName] != null){
    const email = dataUser.USER[userName]['email'];
    const password = dataUser.USER[userName]['password'];
    loginPage.login(email, password);
  }
})

Given('I click on view profile button', ()=>{
  homePage.goToUserCollectionPage()
})

Given('I get a random photo with API', async () => {
  const randomPhoto =  await apiRequest.getRandomPhoto(`${browser.config.baseAPIUrl}`, token);
  const photoResponse = await apiRequest.getPhotoInfo(`${browser.config.baseAPIUrl}`, token, randomPhoto.id);
  scope['photo_id'] = await randomPhoto.id;
  scope['photoResponse'] = await photoResponse;
})

Given('I create the collection with API', async () => {
  const dataCollection =  await apiRequest.AddNewCollection(`${browser.config.baseAPIUrl}`, token, addNewCollectionModel); 
  const collection_id = dataCollection.id;
  const actualUrlCollection = dataCollection.links.html;
  scope['collection_id'] = collection_id;
  scope['actualUrlCollection'] = actualUrlCollection;
        
})

Given('I add a photo {string} to collection', async (photo_id) => {
  const collection_id = await scope['collection_id'];
  const dataAddNewPhoto =  await apiRequest.AddPhotoToCollection(`${browser.config.baseAPIUrl}`, token, collection_id, photo_id);
  scope['actualUrlPhoto'] = dataAddNewPhoto.photo.links.html;
})

Given('I add 2 photos {string} and {string} to collection', async (photo_id_1, photo_id_2) => {
  const collection_id = await scope['collection_id'];
  const dataAddNewPhoto_1 =  await apiRequest.AddPhotoToCollection(`${browser.config.baseAPIUrl}`, token, collection_id, photo_id_1);
  const dataAddNewPhoto_2 =  await apiRequest.AddPhotoToCollection(`${browser.config.baseAPIUrl}`, token, collection_id, photo_id_2);
})

Given('I remove photo {string} from collection', async (photo_id_2) => {
  const collection_id = await scope['collection_id'];
  //const deletePhoto = await apiRequest.deleteCollectionWithAPI(`${browser.config.baseAPIUrl}`, token, collection_id);
  console.log('Delete collection with ID: ' + collection_id);
  
  console.log(`remove data: ` + deletePhoto);
})

Given('I click on collection tab', ()=>{
  userCollectionPage.clickToCollectionTab();
})

Given('I have the number of like before i like', async()=>{
    const photo_id = await scope['photo_id'];
    const photoBeforeLike = await apiRequest.getPhotoInfo(`${browser.config.baseAPIUrl}`, token, photo_id);
    scope['beforeLike'] = await photoBeforeLike.likes;
})





