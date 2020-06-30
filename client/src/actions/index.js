// 654580995087-t14rsebonuq5pj7fvlvjeupv6ojp5pb1.apps.googleusercontent.com

import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../types";

export const signIn = (userId) => ({ type: SIGN_IN, payload: userId });

export const signOut = () => ({ type: SIGN_OUT });

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/");

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/", { ...formValues, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/${id}`, formValues);

  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
};
