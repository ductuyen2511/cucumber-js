const request = require('request');

function DELETE (_url, _headers, _body) {
    try {
      var options = {
        method: 'DELETE',
        url: _url,
        headers: _headers,
        body: _body,
        json: isJsonType(_body)
      };
      return REQUEST(options);
    } catch (err) {
      console.log('Error in sending DELETE Request: ', err);
    }
  }

  module.exports = { DELETE };