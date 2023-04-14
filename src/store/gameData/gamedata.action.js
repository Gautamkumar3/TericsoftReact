import axios from "axios";
import {
  GET_GAMEDATA_ERROR,
  GET_GAMEDATA_LOADING,
  GET_GAMEDATA_SUCCESS,
} from "./gamedata.types";

const api = "https://tericsoft-jdng.onrender.com";

export const getGameData = (query) => async (dispatch) => {
  dispatch({ type: GET_GAMEDATA_LOADING });

  try {
    let res = await axios.get(`${api}/${query}`);
    let obj = {};
    res.data?.forEach((el) => (obj[el.type] = 1));
    dispatch({
      type: GET_GAMEDATA_SUCCESS,
      payload: { data: res.data, types: Object.keys(obj) },
    });
    return res.data;
  } catch (er) {
    dispatch({
      type: GET_GAMEDATA_ERROR,
    });
    return er;
  }
};
