import Homepage from '../../pages/home/Index';
import ApiRequestHandling from '../../../utils/ApiRequestHandling';

export default class HomePageFlow  {
    getLikeNumber(){
        ApiRequestHandling.getPhotoInfo()
    }
    
    verifyRelatedTags(actualListTags, expectedListTags){

        expect(expectedListTags).to.eql(actualListTags);
        return this;
    }

    verifyNumberOfLikesPhoto(beforeLike, afterLike){
        expect(afterLike).to.equal(beforeLike + 1);
        return this;
    }
}
