

const addNewCollectionModel = {
        'title' : 'collection' + getRandomNumber(),
        'description' : 'new collection',
        'private' : false
    }

function getRandomNumber(){
    var date = new Date();
    var n = date.getTime().toString().substr(-8);
    return n;
}

export default addNewCollectionModel;