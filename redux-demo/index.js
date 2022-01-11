const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buycake() {
  return {
    type: BUY_CAKE,
    info: "First Redux App",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}

// const initialState = {
//   numberOfCakes: 10,
//   numberOfIcreCreams: 20,
// };

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIcecreamState = {
  numberOfIcreCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//       break;
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numberOfIcreCreams: state.numberOfIcreCreams - 1,
//       };
//       break;

//     default:
//       return state;
//       break;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
      break;
    default:
      return state;
      break;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcreCreams: state.numberOfIcreCreams - 1,
      };
      break;
    default:
      return state;
      break;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Intial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
