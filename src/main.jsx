import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostList from "./components/PostList.jsx";
import CreatePost from "./components/CreatePost.jsx";
import FAQ from "./components/Faqacc.jsx";
import About from "./components/About.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />},
      { path: "/create-post", element: <CreatePost/> },
      { path: "/faq", element:<FAQ/>},
      { path: "/about", element:<About/>}
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
