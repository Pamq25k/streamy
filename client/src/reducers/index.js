import { combineReducers } from "redux";
import streamsReducer from "./streamsReducer";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
  streams: streamsReducer,
  auth: authReducer,
  form: formReducer,
});
