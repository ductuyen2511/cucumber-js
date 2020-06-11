import Page from './page';
import ElementHandling from '../../utils/ElementHandling';
const $ = ElementHandling.singleElement;

const EDIT_PROFILE_BTN = 'a[href ="/account"]'
const USER_LOCATION_TEXT = 'input[id ="user_location"]'
const COLLECTIONS_TAB = '//span[text()="Collections"]'

class usercollection_page extends Page{
    clickToEditProfile(){
        $(EDIT_PROFILE_BTN).click();
        return this;
    }

    getTextUser(){
        return $(USER_LOCATION_TEXT).getAttribute("value");
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

}

export default new usercollection_page()