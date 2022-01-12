import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import { counterReducer } from "./counter/counterReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: iceCreamReducer,
  count: counterReducer,
  user: userReducer,
});

export default rootReducer;
