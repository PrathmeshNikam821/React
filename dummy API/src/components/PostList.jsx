import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMesaage";
import LoadingSpinner from "./LoadingSpinner";


const PostList = () => {
  const { postList , addInitialPosts } = useContext(PostListData);
  const [fetching , setFetching ] = useState(false);



  useEffect(()=>{
    setFetching(true);
     fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data =>{
        addInitialPosts(data.posts );
        setFetching(false);
      });

      return () => {
        console.log("Cleaning up UseEffect. ")
      }
  },[])



  return (
    <>
      {fetching && <LoadingSpinner/>}
      { !fetching && postList.length === 0 && <WelcomeMessage  /> }
      {  !fetching &&  postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
