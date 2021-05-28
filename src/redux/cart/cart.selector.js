import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumilatedQuantity, cartItems) =>
        accumilatedQuantity + cartItems.quantity,
      0
    )
);

export const selectTotalCost = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumilatedQuantity, cartItems) =>
      accumilatedQuantity + cartItems.quantity * cartItems.price,
    0
  )
);
