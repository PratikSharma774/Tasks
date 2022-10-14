import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { Navigate } from 'react-router-dom';

export const signin = (formdata,history) => async (dispatch) => {
  try {
    //login
    // calls api in index.js
    const { data } = await api.signIn(formdata);
// dispatch request to reducers auth.js with authenticator
    dispatch({ type: AUTH, data });
    history('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formdata, history) => async (dispatch) => {

    console.log("Inside Dispatch", formdata)
  try {
    const { data } = await api.signUp(formdata);

    dispatch({ type: AUTH, data });

    history('/');
  } catch (error) {
    console.log(error);
  }
};