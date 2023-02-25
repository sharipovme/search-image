export const FETCH_IMAGES_REQUEST = "FETCH_IMAGES_REQUEST";
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";
export const FETCH_IMAGES_FAILURE = "FETCH_IMAGES_FAILURE";

export const fetchImagesRequest = (params) => ({
  type: FETCH_IMAGES_REQUEST,
  payload: params,
});

export const fetchImagesSuccess = (images) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images,
});

export const fetchImagesFailure = (error) => ({
  type: FETCH_IMAGES_FAILURE,
  payload: error,
});
