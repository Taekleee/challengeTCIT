import {
  CREATE_POST,
  RETRIEVE_POSTS,
  DELETE_POST,
} from "../actions/types";

const initialState = [];

function postReducer(posts = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_POST:
      console.log("payload", payload);
      console.log(posts);
      return [...posts, payload.post];

    case RETRIEVE_POSTS:
      console.log("payload", payload)
      return payload;

    case DELETE_POST:
      return posts.filter((post) => post.name !== payload.name);

    default:
      console.log(posts);
      return posts;
  }
};

export default postReducer;