import ElementHandling from '../../../utils/ElementHandling';
import { Browser } from 'selenium-webdriver';

const $ = ElementHandling.singleElement;
const COLLECTION_USER_BTN = 'header [role="presentation"]';
const VIEW_PROFILE_BTN = '//div[@role = "menu"]//a[text()="View profile"]'
const FULL_NAME_TXT = 'div[data-test="users-route"] >div:nth-child(2) div.U8wGh';
const EDIT_PROFLE_BTN = 'a[href ="/account"]'
const USER_LOCATION_TEXT = 'input[id ="user_location"]'
const COLLECTIONS_TAB = '//span[text()="Collections"]'
const LIST_COLLECTIONS = '//div[@data-test = "collection-feed-card"]//a[contains(@href, "collections")]';



class Index {

    goToUserCollectionPage() {
        $(COLLECTION_USER_BTN).click();
        $(VIEW_PROFILE_BTN).click();
        return this;
    }

    clickToCollectionTab(){
        $(COLLECTIONS_TAB).click();
        return this;
    }

    clickToCollection(collection_id){
        var COLLECTION = `//a[contains(@href, "${collection_id}")]`;
        $(COLLECTION).click();
        return this;
    }

    clickToPhoto(photo_id){
        var PHOTO = `//a[@href = "/photos/${photo_id}"]`;
        $(PHOTO).click();
        return this;   
    }

    getCurentURL(){
        return browser.getUrl();
    }

    clickToEditProfile(){
        $(EDIT_PROFLE_BTN).click();
        return this;
    }
    openDetailCollectionUrl(url){
        browser.url(url);
        return this;
    }

    getTextUser(){
        return $(USER_LOCATION_TEXT).getAttribute("value");
    }

    getFullName() {
        return $(FULL_NAME_TXT).getText();
    }

    getRandomNumber(){
        var date = new Date();
        var n = date.getTime().toString().substr(-8);
        return n;
    }
}

export default new Index();