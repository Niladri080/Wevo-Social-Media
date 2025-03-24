import Hero from "./Hero.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const About = ({setcontent,setposts}) => {
  const [button_click,setbutton_click]=useState(false);
  return (
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 about">
      <div className="col-10 col-sm-8 col-lg-6">
        <img 
          src={Hero} 
          className="d-block mx-lg-auto img-fluid about-img" 
          alt="Bootstrap Themes" 
          height="500" 
          loading="lazy" 
        />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        Connecting people, sharing moments, and inspiring communities – Welcome to WEVO!
        </h1>
        <p className="lead">
        WEVO is a dynamic social media platform designed to bring people together, foster meaningful connections, and empower creativity. Whether you're sharing your thoughts, discovering new content, or engaging with a like-minded community, WEVO provides a seamless and enriching experience. Join us in shaping a digital space where every voice matters and every story counts.
        </p>
{button_click===true && <p className="lead">At WEVO, we believe in fostering meaningful connections. With intelligent algorithms that personalize your feed, you will always be presented with content that matters most to you. Unlike traditional social media platforms, WEVO prioritizes real interactions by offering community-driven features, including interest-based groups, trending discussions, and AI-powered recommendations that enhance your browsing experience. Whether you’re an artist, an influencer, a business, or just someone who loves sharing moments, WEVO gives you the tools to reach your audience effortlessly.

Our commitment to privacy and security ensures that every user has full control over their data and online presence. With advanced privacy settings, content moderation, and a safe-space policy, WEVO creates a trustworthy digital environment where you can express yourself freely without concerns. Your data is protected, and your content remains truly yours.

WEVO is more than just a platform; it’s a movement toward a better, more interactive, and more inclusive social experience. From real-time updates to personalized notifications and seamless mobile-friendly access, we strive to create a digital space where every voice matters. Our mission is to empower users with a social networking experience that is not just entertaining but also meaningful and impactful.

Join WEVO today and be part of a global community that celebrates authenticity, innovation, and engagement. Whether you're here to explore, create, or inspire, WEVO is your gateway to a world of endless possibilities.</p>}

        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          {button_click===false && <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={()=>{
            setbutton_click(true)}}>
            Read More
          </button>}
          <Link to="/">
          <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={()=>{
            setposts("Home");
            setcontent("Home");
          }}>
            Home
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
