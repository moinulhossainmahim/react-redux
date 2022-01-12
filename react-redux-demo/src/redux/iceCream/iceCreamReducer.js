import { BUY_ICECREAM } from "./iceCreamTypes";

const initialSstate = {
  numOfIcecreams: 20,
};

const iceCreamReducer = (state = initialSstate, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIcecreams: state.numOfIcecreams - 1 };

    default:
      return state;
  }
};

export default iceCreamReducer;
