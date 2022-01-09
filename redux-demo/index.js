const BUY_CAKE = "BUY_CAKE";

function buycake() {
  return {
    type: BUY_CAKE,
    info: "First Redux App",
  };
}

// reducer(state, action) =>

const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
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
