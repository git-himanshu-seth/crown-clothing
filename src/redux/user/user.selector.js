import { createSelector } from "reselect";

const selectCurrentUsers = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectCurrentUsers],
  (user) => user.currentUser
);
