import { call, put, takeEvery } from "redux-saga/effects";
import { getImagesAPI } from "../../services/images";

import {
  FETCH_IMAGES_REQUEST,
  fetchImagesSuccess,
  fetchImagesFailure,
} from "../actions/index";

export function* getImages(action) {
  console.log(action.payload);
  try {
    const response = yield call(() => getImagesAPI(action.payload));
    yield put(fetchImagesSuccess(response.data.results));
  } catch (error) {
    yield put(fetchImagesFailure(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_IMAGES_REQUEST, getImages);
}
