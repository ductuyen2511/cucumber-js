import axios from 'axios';
import { Condition } from 'selenium-webdriver';
const request = require('./api_request_helper');


export default class ApiRequestHandling {

    /**
     * @param {string} url
     * @param {Object} headers
     * @param {Object} params
     * @returns {Promise<T>}
     */
    static async makeGetRequest(url, headers, params = null) {
        try {
            const config = {
                headers: headers,
                params: params
            };
            const response = params == null ? await axios.get(url, {headers: headers}) : await axios.get(url, config);
            console.log(response.data);
            return response.data;
        } catch (error) {
            throw new Error('Error make get request');
        }
    }

    /**
     * @param {string} url
     * @param {Object} formData
     * @param {Object} requestHeaders
     * @returns {Promise<T>}
     */
    static async makePostRequest(url, formData, requestHeaders) {
        try {
            const res = await axios.post(url, formData, {headers: requestHeaders});
            console.log(res.data);
            return res.data;
        } catch (error) {
            throw new Error('Error make post request');
        }
    }

    /**
     * @param {string} url
     * @param {Object} requestHeaders
     * @param {Object} formData
     * @returns {Promise<*>}
     */
    static async makeDeleteRequest(url, requestHeaders, formData = null) {
        try {
            const response = formData == null ? await axios.delete(url, {headers: requestHeaders})
                : await axios.post(url, {data: formData}, {headers: requestHeaders});
            return response.status;
        } catch (error) {
            throw new Error('Error make delete request');
        }
    }

    static getPostRequestData(url, formData, headers) {
        return browser.call(() => this.makePostRequest(url, formData, headers));
    }

    static getGetRequestData(url, headers, param = null) {
        if (param !== null) {
            return browser.call(() => this.makeGetRequest(url, headers, param));
        }
        return browser.call(() => this.makeGetRequest(url, headers));
    }

    static async AddNewCollection(url, token, params){
        try {
            const config = {
                headers: token
            };        
            const param = params;
            const res = await axios.post(`${url}/collections`, param, config)
            return res.data
        } catch (error) {
            throw new Error('Error make post request');
        }
    }

    static async getRandomPhoto(url, token){
        try {
            const config = {
                headers: token
            };
            
            const res = await axios.get(`${url}/photos/random`, config)
            return res.data
        } catch (error) {
            throw new Error('Error make get request');
        }
    }

    static async getPhotoInfo(url, token, photo_id){
        try {
            const config = {
                headers: token
            };

            const res = await axios.get(`${url}/photos/${photo_id}`, config)
            return res.data
        } catch (error) {
            throw new Error('Error make get request');
        }
    }

    static async AddPhotoToCollection(url, token, collection_id, photo_id){
        try {
            const config = {
                headers: token
            };
                
            const param = {
                collection_id: collection_id,
                photo_id : photo_id
            };
            const res = await axios.post(`${url}/collections/${collection_id}/add`, param, config);
            return res.data;    
        } catch (error) {
            throw new Error('Error make post request');
        }
    }

    /*static async deleteCollectionWithAPI(url ,token, collection_id) {
        const param = {
        };

        const config = {
            headers: token
        };
        const urlRemove = `${url}/collections/${collection_id}`
        console.log('delete with collection id: '+ collection_id)
        this.makeDeleteRequest(urlRemove, token, param);
    }*/

    static async deleteCollectionWithAPI(url, token, collection_id){
        const api = `${url}/collections/${collection_id}`
        const header = token;
        const response = await request.DELETE(api, header);
        return response;
    }
}