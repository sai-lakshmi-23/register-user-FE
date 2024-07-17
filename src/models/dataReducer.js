import { createAction, createReducer } from "@reduxjs/toolkit";

export const dataAction = createAction("FORM_SUBMIT");
export const registerAction = createAction("REGISTER_USER");
export const initialState = {
  email: "",
  password: "",
};

export const dataReducer = createReducer(initialState, {
  [dataAction]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
});
