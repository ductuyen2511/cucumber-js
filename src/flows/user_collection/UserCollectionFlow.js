import UserCollectionPage from '../../pages/user_collection/Index';


export default class UserCollectionFlow  {

      verifyFullNameInUserCollectionPage(fullName) {
        UserCollectionPage
            .goToUserCollectionPage();
        const actualFullName = UserCollectionPage.getFullName();

        expect(fullName).to.equal(actualFullName, `${actualFullName} is not right`);

        return this;
    }

    verifyLocation(fullName) {
        const actualFullName = UserCollectionPage.getTextUser();
        expect(fullName).to.equal(actualFullName, `${actualFullName} is not right`);
        return this;
    }

    verifyCollection(collection_url, collection_id){
        UserCollectionPage
            .clickToCollection(collection_id);
        var url = UserCollectionPage.getCurentURL();
        expect(collection_url).to.equal(url);
        return this;
    }

    verifyPhoto(photo_url, photo_id){
        UserCollectionPage
            .clickToPhoto(photo_id);
        var url = UserCollectionPage.getCurentURL();
        expect(photo_url).to.equal(url);
        return this;
    }
    
}
