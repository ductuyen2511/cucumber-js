import Page from './page';
import ElementHandling from '../../utils/ElementHandling';
const $ = ElementHandling.singleElement;
const $$ = ElementHandling.listElement;
const COLLECTION_USER_BTN = 'header [role="presentation"]';
const VIEW_PROFILE_BTN = '//div[@role = "menu"]//a[text()="View profile"]'
const LIST_ELEMENT = '//p[text() = "Related tags"]/parent::div//div//a[contains(@title, "image")]'
const LIKE_PHOTO = '//header//button[@title ="Like photo"]';

class HomePage extends Page{

    open(photo_id) {
        super.open(`photos/${photo_id}`)
    }

    goToUserCollectionPage() {
        $(COLLECTION_USER_BTN).click();
        $(VIEW_PROFILE_BTN).click();
        return this;
    }

    getRelatedTagFromUI(){
        var listElement = $$(LIST_ELEMENT);
        browser.pause(2000);
        var array = [];
        for(var i = 0; i < listElement.length; i++){
            array[i] = listElement[i].getText().toLowerCase();
        }
        return array;
    }

    getRelatedTagFromAPI(photoInfo){
        var arrayAPI = [];
        for(var i = 0; i < photoInfo.tags.length; i++){
            arrayAPI[i] = photoInfo.tags[i].title.trim()
        }
        return arrayAPI;
    }

    likeAPhoto(){
        $(LIKE_PHOTO).click();
        browser.pause(2000);
        return this;
    }
}
export default new HomePage()