import PhotoPage from '../../pages/photo/Index';
import photoRequest from '../../../data/test_data/photo/PhotoRequest';
import APIHandling from '../../../utils/ApiRequestHandling';

export default class PhotoFlow  {

    getPhotoInfo(photoId) {
        let url  = photoRequest.url.replace('$id', photoId);
        return APIHandling.getGetRequestData(url, photoRequest.header);
    }

    verifyPhotoInfo(photoUrl, cameraModel, focalLength) {
        PhotoPage
            .openPhotoUrl(photoUrl)
            .clickOnInfoBtn();

        const actualCameraModel = PhotoPage.getCameraModel();
        const actualFocalLength = PhotoPage.getFocalLength();

        expect(cameraModel).to.equal(actualCameraModel,'Wrong camera model');
        expect(focalLength).to.equal(actualFocalLength,'Wrong focal length');

        return this;
    }
}
