import { Then } from 'cucumber';
import userCollectionPage from '../page_object/usercollection_page'
import homePage from '../page_object/home_page'
import apiRequest from '../../utils/ApiRequestHandling';
import token from '../../data/test_data/authorize/Index';
const scope = require('../hooks/scope');
const assert = require('chai').assert;



Then('the location {string} is display correctly', (location) => {
    const actualLocation = userCollectionPage.getTextUser();
    const expectedLocation = location;
    assert.equal(actualLocation, expectedLocation, 'verify Location')
})

Then('all related tags are display correctly', () => {
    const photoResponse = scope['photoResponse'];
    const actualListTags = homePage.getRelatedTagFromUI();
    const expectedListTags = homePage.getRelatedTagFromAPI(photoResponse);
    expect(expectedListTags).to.eql(actualListTags);
})

Then('the collection_id is display correctly', () => {
    const collection_id = scope['collection_id'];
    userCollectionPage.clickToCollection(collection_id);
    const actualUrlCollection = scope['actualUrlCollection'];
    const expectedUrlCollection = userCollectionPage.getCurentURL();
    assert.equal(actualUrlCollection, expectedUrlCollection, 'verify API collection url and UI collection url')
})

Then('the photo_id {string} is display correctly', (photo_id) => {
    userCollectionPage.clickToPhoto(photo_id)
    const actualUrlPhoto = scope['actualUrlPhoto'];
    const expectedUrlPhoto = userCollectionPage.getCurentURL();
    assert.equal(actualUrlPhoto, expectedUrlPhoto, 'verify API photo url and UI photo url')
})

Then('the number of likes are display correctly', async() => {
    const photo_id = await scope['photo_id'];
    const photoAfterLike = await apiRequest.getPhotoInfo(`${browser.config.baseAPIUrl}`, token, photo_id);
    const beforeLike = await scope['beforeLike'];
    const afterLike = await photoAfterLike.likes;
    assert.equal(afterLike, beforeLike + 1, 'verify number of likes')
})


