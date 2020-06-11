import ElementHandling from '../../../utils/ElementHandling';

const $ = ElementHandling.singleElement;

const INFO_BTN = '//span[text()="Info"]/..';
const CAMERA_MODEL = 'div[aria-label="Modal"] >div:last-child >dl:last-child >div:nth-child(2) >dd';
const FOCUS_LENGTH = 'div[aria-label="Modal"] >div:last-child >dl:last-child >div:nth-child(3) >dd';

class Index {

    clickOnInfoBtn() {
        $(INFO_BTN).click();
        return this;
    }

    openPhotoUrl(url) {
        browser.url(url);
        return this;
    }

    getCameraModel() {
        return $(CAMERA_MODEL).getText();

    }

    getFocalLength() {
        return $(FOCUS_LENGTH).getText().replace('mm','');
    }

}

export default new Index();