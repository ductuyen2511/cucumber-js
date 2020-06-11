const { After, AfterAll, BeforeAll } = require('cucumber');
const scope = require('./scope');


BeforeAll(async () => {
    scope.context = {};
  });

/*AfterAll(async () => {
  const { collection_id } = await scope['collection_id'];
  if (collection_id) {
    await collectionHelpers.deleteCollectionWithAPI(collection_id);
    console.log('Delete collection with ID: ' + collection_id);
  }
})*/