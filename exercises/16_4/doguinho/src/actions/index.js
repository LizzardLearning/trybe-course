export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const GET_IMAGE = 'GET_IMAGE';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const API_URL = 'https://dog.ceo/api/breeds/image/random';

const requestImage = () => (
  { type: REQUEST_IMAGE }
);

const getImage = (json) => (
  { type: GET_IMAGE, payload: json.message }
);

const requestFailed = (error) => (
  { type: REQUEST_FAILED, payload: error }
);

export const fetchDog = () => (dispatch) => {
  dispatch(requestImage());
  fetch(API_URL)
    .then((response) => response.json()
      .then(
        (json) => dispatch(getImage(json)),
        (error) => dispatch(requestFailed(error)),
      )
    );
};
