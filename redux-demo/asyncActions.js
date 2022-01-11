const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

initialState = {
  isLoading: false,
  users: [],
  isError: false,
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, isLoading: true };
      break;
    case FETCH_USERS_SUCCESS:
      return { ...state, isLoading: false, users: action.payload, error: "" };
      break;
    case FETCH_USERS_FAILURE:
      return { ...state, isLoading: false, users: [], error: action.payload };
    default:
      break;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const data = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
