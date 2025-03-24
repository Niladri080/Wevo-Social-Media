import { Link } from "react-router-dom";
const Zero=({setposts,setcontent})=>{
  return ( <div className="text-secondary py-5 text-center me-5">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-green">Your Feed is Empty! Let's Explore More.</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">
        Looks like there’s nothing here yet! Don’t worry—there’s a whole world of posts waiting for you. Stay connected, discover trending content, and engage with the community.
        Click the button below to load more posts and keep the conversation going!
        📢 Stay updated, stay inspired!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/create-post">
          <button type="button" className="btn btn-outline-dark btn-lg px-4">
            Create Post
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>);
}
export default Zero;