import {
  GET_GAMEDATA_ERROR,
  GET_GAMEDATA_LOADING,
  GET_GAMEDATA_SUCCESS,
} from "./gamedata.types";

const initialData = {
  loading: false,
  error: false,
  types: [],
  data: [],
};

export const gameDataReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case GET_GAMEDATA_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        types: [],
        data: [],
      };
    case GET_GAMEDATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        types: [],
        data: [],
      };
    case GET_GAMEDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        types: payload.types,
        data: payload.data,
      };
    default:
      return {
        ...state,
      };
  }
};
