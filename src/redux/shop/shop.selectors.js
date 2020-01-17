import {createSelector} from "reselect";

const shopSelector = state => state.shop;

export const selectShopCollections = createSelector(
    [shopSelector],
    shop => shop.collections
);


export const selectCollection = collectionUrl =>
    createSelector(
    [selectShopCollections],
     collections => collections[collectionUrl]);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections=> Object.keys(collections).map(key => collections[key])
);