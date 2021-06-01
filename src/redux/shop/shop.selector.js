import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const shopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [shopCollection],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlPram) =>
  createSelector(
    [shopCollection],
    (collections) => collections[collectionUrlPram]
  );
