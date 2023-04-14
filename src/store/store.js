import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { gameDataReducer } from "./gameData/gamedata.reducer";
import { gameSubCategoryReducer } from "./gameSubCategory/subCategory.reducer";

const rootReducer = combineReducers({
  gameData: gameDataReducer,
  subCategoryData: gameSubCategoryReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
