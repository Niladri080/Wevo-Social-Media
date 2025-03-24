import { useContext } from "react";
import { ContextStore } from "../store/Context-store";
import Post from "./Post";
import Zero from "./Zeroposts";
import Loading from "./Loading";

const PostList = ({ setposts, setcontent }) => {
  const { postlist, loading } = useContext(ContextStore);
  return (
    <div className="post-list m-l">
      {loading && <Loading />}
      {!loading && postlist.length === 0 && (
        <Zero setcontent={setcontent} setposts={setposts} />
      )}
      {!loading &&
        postlist.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
