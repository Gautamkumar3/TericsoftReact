import { GET_GAMESUBCATEGORY_DATA_SUCCESS } from "./subCategory.types";

export const gameSubCategoryReducer = (
  state = { data: [] },
  { type, payload }
) => {
  switch (type) {
    case GET_GAMESUBCATEGORY_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
