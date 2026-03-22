const request = require('request');

function isJsonType(body) {
  if (body === null || body === undefined) return false;
  if (typeof body === 'object') return true;
  try {
    JSON.parse(body);
    return true;
  } catch {
    return false;
  }
}

function REQUEST(options) {
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) return reject(error);
      resolve({ status: response.statusCode, body });
    });
  });
}

function GET(_url, _headers, _params) {
  try {
    var options = {
      method: 'GET',
      url: _url,
      headers: _headers,
      qs: _params,
      json: true
    };
    return REQUEST(options);
  } catch (err) {
    console.log('Error in sending GET Request: ', err);
  }
}

function POST(_url, _headers, _body) {
  try {
    var options = {
      method: 'POST',
      url: _url,
      headers: _headers,
      body: _body,
      json: isJsonType(_body)
    };
    return REQUEST(options);
  } catch (err) {
    console.log('Error in sending POST Request: ', err);
  }
}

function DELETE(_url, _headers, _body) {
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

module.exports = { GET, POST, DELETE };