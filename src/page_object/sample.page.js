
Page.prototype.open = function (path) {
    browser.url('/' + path); //eslint-disable-line prefer-template
};

module.exports = new Page();

class Page {
	open(path) {
		browser.url('/' + path);
	}
}

export default new Page();