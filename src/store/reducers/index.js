import { combineReducers } from "redux";
import { FETCH_IMAGES_SUCCESS } from "./images";

const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  images: imagesReducer,
});

export default rootReducer;
