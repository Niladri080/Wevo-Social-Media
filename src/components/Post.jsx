import { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { ContextStore } from "../store/Context-store";
const Post = ({ post }) => {
  const {deletepost} = useContext(ContextStore);
  const {likeIncrease,dislikeIncrease} =useContext(ContextStore);
  return (
    <div className="card card-s bg-beize-green" style={{ width: "18rem" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-button" onClick={()=>deletepost(post.id)}>
      <MdDelete/>
  </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag)=>
        <button type="button" key={tag} className="btn tag-bg mb-1 me-1">#{tag}</button>)}
      </div>
      <div className="likebox">
      <button type="button" className="btn btn-outline-danger position-relative button-s" onClick={()=>likeIncrease(post.id)}>
      <FcLike />
  <span className ="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {post.reactions.likes}
  </span>
</button>
<button type="button" className="btn btn-outline-warning position-relative button-s" onClick={()=>{
  dislikeIncrease(post.id);
}}>
<FcDislike />
  <span className ="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {post.reactions.dislikes}
  </span>
</button>
</div>
    </div>
  );
};

export default Post;
