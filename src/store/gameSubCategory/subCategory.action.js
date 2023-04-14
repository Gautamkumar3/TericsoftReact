import { GET_GAMESUBCATEGORY_DATA_SUCCESS } from "./subCategory.types";

export const getSubCategoryData = (data, query) => (dispatch) => {
  let filterdData = data.filter((el) => el.type === query);
  dispatch({ type: GET_GAMESUBCATEGORY_DATA_SUCCESS, payload: filterdData });
};
