export default class ElementHandling {

    static singleElement(selector, ...parameters){
        if(parameters.length > 0){
            for (let parameter of parameters) {
                selector = selector.replace(/\$\w+/m, parameter);
            }
        }
        $(selector).waitForDisplayed(15000);
        return browser.$(selector);
    }

    static listElement(selector){
        $(selector).waitForDisplayed(15000);
        return browser.$$(selector);
    }

    static getRandomInt() {
        return Math.floor(Math.random() * Math.floor(max));
      }
}
