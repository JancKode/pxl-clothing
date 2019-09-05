import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

const shopData = state => state.shop;

export const shopDataCollections = createSelector(
  [shopData],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [shopDataCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [shopDataCollections],
    collections => collections[collectionUrlParam]
    // collections.find(
    //   collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    // )
  );
