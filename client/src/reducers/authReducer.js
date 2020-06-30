import { SIGN_IN, SIGN_OUT } from "../types";

const INTTIAL_VALUES = { isSignedIn: null };

export default (state = INTTIAL_VALUES, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
