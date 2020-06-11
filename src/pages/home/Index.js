import ElementHandling from '../../../utils/ElementHandling';

const $ = ElementHandling.singleElement;
const $$ = ElementHandling.listElement;
const PHOTO = '//a[contains(@href, "photo")]';
const LIKE_PHOTO = '//header//button[@title ="Like photo"]';
const LIST_ELEMENT = '//p[text() = "Related tags"]/parent::div//div//a[contains(@title, "image")]'

class Index {
    clickToPhoto(){
        $(PHOTO).click();
        browser.pause(4000);
        return this;
    }

    openPhotoURL(photoURL){
        browser.url(photoURL);
        return this;
    }

    likeAPhoto(){
        $(LIKE_PHOTO).click();
        browser.pause(2000);
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
}

export default new Index();