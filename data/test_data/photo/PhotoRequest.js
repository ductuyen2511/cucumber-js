import token from '../authorize/Index';

const getPhoto ={
    'url': `${browser.config.baseAPIUrl}/photos/$id`,
    'header': token
};

export default getPhoto;
