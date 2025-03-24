import { createContext, useReducer, useState,useEffect } from "react";

export const ContextStore = createContext({
  postlist: [],
  addpost: () => {},
  deletepost: () => {}, 
  loading:false,
  likeIncrease: () => {},
  dislikeIncrease: () => {},
});

const postListReducer = (currPostList, action) => {
  let newList = currPostList;

  if (action.type === "DELETE") {
    newList = currPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "LIKE") {
    newList = currPostList.map((post) => {
      if (post.id === action.payload.postId && post.isreact === false) {
        return {
          ...post,
          reactions: { ...post.reactions, likes: post.reactions.likes + 1 },
          isreact: true,
        };
      }
      return post;
    });
  } else if (action.type === "ADD") {
    newList = [
      { ...action.payload.post},
      ...currPostList,
    ];
  } else if (action.type === "FETCH_DATA") {
    newList = action.payload.list.map((post) => ({
      ...post,
      isreact: false,
      isdisreact: false,
    }));
  } else if (action.type === "DISLIKE") {
    newList = currPostList.map((post) => {
      if (post.id === action.payload.postID && post.isdisreact === false) {
        return {
          ...post,
          reactions: { ...post.reactions, dislikes: post.reactions.dislikes + 1 },
          isdisreact: true,
        };
      }
      return post;
    });
  }
  return newList;
};

const ContextProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(postListReducer, []);
  const [loading, setloading] = useState(false);
  const deletepost =(postId) => {
    dispatchPostList({
      type: "DELETE",
      payload: { postId },
    });
  };

  const likeIncrease = (postId) => {
    dispatchPostList({
      type: "LIKE",
      payload: { postId },
    });
  };

  const addpost = (post) => {
    dispatchPostList({
      type: "ADD",
      payload: { post },
    });
  };

  const addpostList = (list) => {
    dispatchPostList({
      type: "FETCH_DATA",
      payload: { list },
    });
  };

  const dislikeIncrease = (postID) => {
    dispatchPostList({
      type: "DISLIKE",
      payload: { postID },
    });
  };
  useEffect(() => {
    setloading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addpostList(obj.posts);
        setloading(false);
      })
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <ContextStore.Provider
      value={{
        postlist,
        addpost,
        deletepost,
        likeIncrease,
        loading,
        dislikeIncrease,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;
