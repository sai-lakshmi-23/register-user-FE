import { createAction, createReducer } from "@reduxjs/toolkit";

export const signAction=createAction("SUBMIT_SIGN")
export const doSignAction=createAction("REGISTER_ACTION")
export const initialStates={
    firstName:"",
    lastName:"",
    dateOfBirth:"",
    email:"",
    gender:"",
    phoneNumber:"",
    aadharNumber:"",
    panNumber:"",
};

export const signReducer=createReducer(initialStates,{
    [signAction]: (state,action) =>({
        ...state,
    ...action.payload,
    }),
});