import { useContext, useRef } from "react";
import { ContextStore } from "../store/Context-store";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate=useNavigate();
  const {addpost}=useContext(ContextStore);
  const titleEle=useRef();
  const bodyEle=useRef();
  const tagsEle=useRef();
  const userIdEle=useRef();
  const postHandler=(event)=>{
    event.preventDefault();
    const title=titleEle.current.value;
    const body=bodyEle.current.value; 
    const tags=tagsEle.current.value.split(' ');
    const userID=userIdEle.current.value;
    const likes=Math.floor(Math.random()*100);
    const dislikes=Math.floor(Math.random()*100);
    const reactions={likes,dislikes};
    titleEle.current.value='';
    bodyEle.current.value='';
    tagsEle.current.value='';
    userIdEle.current.value='';
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        userId: userID,
        body:body,
        tags:tags,
        reactions:reactions,
      })
    })
    .then(res => res.json())
    .then(obj=>{
      addpost({...obj,isreact:false,isdisreact:false})
      navigate("/");
    });
  }


  return (<form className="create-post m-l" onSubmit={()=>postHandler(event)}>
    <h1 className="text-green" style={{marginBottom:"40px",fontWeight:"500"}}>Share to WEVO</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="What's on your mind?"
          id="title"
          ref={titleEle}
        />
        </div>
        <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your User Id"
          id= "UserId"
          ref={userIdEle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
        </label>
        <textarea
          className="form-control"
          id="Body"
          rows="3"
          placeholder="How are your feeling today?"
          ref={bodyEle}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Give your tags using space"
          id="tags"
          ref={tagsEle}
        />
      </div>
      <button className="btn btn-primary d-inline-flex align-items-center post-button" type="submit">
      Post
      <i className="bi bi-arrow-right-short ms-1"></i>
    </button>
  </form>)
};
export default CreatePost;