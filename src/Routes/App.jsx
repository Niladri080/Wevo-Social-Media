import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useState } from "react";
import ContextProvider from "../store/Context-store.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  const [posts, setposts] = useState("Home");
  const [content, setcontent] = useState("Home");
  return (
    <ContextProvider>
      <div className="app-container">
        <Sidebar posts={posts} setposts={setposts} setcontent={setcontent} />
        <div className="content">
          <Header
            setcontent={setcontent}
            setposts={setposts}
            content={content}
          />
          <Outlet />
          <Footer />
        </div>
      </div>
    </ContextProvider>
  );
}
export default App;
