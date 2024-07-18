import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import AllServices from "./Pages/AllServices.jsx";
import ViewService from "./Pages/ViewService.jsx";
import AllProjects from "./Pages/AllProjects.jsx";
import ViewProject from "./Pages/ViewProject.jsx";
import AllBlogs from "./Pages/AllBlogs.jsx";
import ViewBlog from "./Pages/ViewBlog.jsx";
import AllTeamMembers from "./Pages/AllTeamMembers.jsx";
import Careers from "./Pages/Careers.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<MainPage />} />
      <Route path="all-services" element={<AllServices />} />
      <Route path='view-service/:serviceid' element={<ViewService/>}/>
      <Route path="all-projects" element={<AllProjects />} />
      <Route path='view-project/:projectid' element={<ViewProject/>}/>
      <Route path="all-blogs" element={<AllBlogs />} />
      <Route path='view-blog/:blogid' element={<ViewBlog/>}/>
      <Route path="all-members" element={<AllTeamMembers />} />
      <Route path="careers" element={<Careers />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
