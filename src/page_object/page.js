import ElementHandling from '../../utils/ElementHandling';
const $ = ElementHandling.singleElement;


export default class Page{

    open(path) {
        browser.url(path)
    }
}