import { axiosInstance } from "../../Axios/AxiosInstance";


export const getMoviesList = (page, query, lang) => async (dispatch) => {
  try {
    const url = query
      ? `/search/movie?query=${query}&page=${page}&language=${lang === "EN" ? "en-US" : "ar-SA"}`
      : `/movie/popular?page=${page}&language=${lang === "EN" ? "en" : "ar"}`;

    const res = await axiosInstance.get(url); 
    dispatch({
      type: "GET_MOVIES_LIST",
      payload: res.data.results,
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
