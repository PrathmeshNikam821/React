import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(post => post.id !== action.payload.postId)

  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Bhopal ",
    body: "Hi friends , I am going to Bhopal for my masters.  ",
    reactions: 2,
    userId: "IamPratham821",
    tags: ["mtech", "NIT", "GATE"],
  },
  {
    id: "2",
    title: "Going to Mumbai ",
    body: "Hi friends , I am going to Mumbai for my  vacations .  ",
    reactions: 10,
    userId: "hello821",
    tags: ["vacations", "Mumbai"],
  },
];

export default PostListProvider;
