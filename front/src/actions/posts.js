import {
  CREATE_POST,
  RETRIEVE_POSTS,
  DELETE_POST
} from "./types";

import PostDataService from "../services/posts.service";

export const createPost = (name, text) => async (dispatch) => {
  try {
    const res = await PostDataService.create({ name, text });
    console.log(res);
    dispatch({
      type: CREATE_POST,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrievePosts = () => async (dispatch) => {
  try {
    const res = await PostDataService.getAll();

    dispatch({
      type: RETRIEVE_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const deletePost = (name) => async (dispatch) => {
  try {
    console.log(name);
    await PostDataService.delete(name);

    dispatch({
      type: DELETE_POST,
      payload: { name },
    });
  } catch (err) {
    console.log(err);
  }
};


export const findPostsByName = (name) => async (dispatch) => {
  try {
    const res = await PostDataService.findByName(name);

    dispatch({
      type: RETRIEVE_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};