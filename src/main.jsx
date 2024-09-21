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
import CareersApply from "./Pages/CareersApply.jsx";
import { Toaster } from "react-hot-toast";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsAndCondition from "./Pages/TermsAndCondition.jsx";
import RemoteResources from "./Pages/RemoteResources.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ViewServicesUpdated from "./Pages/ViewServicesUpdated.jsx";
import ResearchDetailedContent from "./Pages/ResearchDetailedContent.jsx";
import IndustriesDetailedPage from "./Pages/IndustriesDetailed.jsx";
import Test from "./Pages/Test.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<MainPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="all-services" element={<AllServices />} />
      <Route path='all-services/view-service/:serviceid' element={<ViewServicesUpdated/>}/>
      <Route path='all-services/view-industries/:serviceid' element={<IndustriesDetailedPage/>}/>
      <Route path='all-services/view-research-and-development/:serviceid' element={<ResearchDetailedContent/>}/>
      <Route path="all-projects" element={<AllProjects />} />
      <Route path='view-project/:projectid' element={<ViewProject/>}/>
      <Route path="all-blogs" element={<AllBlogs />} />
      <Route path='view-blog/:blogid' element={<ViewBlog/>}/>
      <Route path="all-members" element={<AllTeamMembers />} />
      <Route path="remote-resources" element={<RemoteResources />} />
      <Route path="careers" element={<Careers />} />
      <Route path="careers/apply" element={<CareersApply />} />
      <Route path="privacypolicy" element={<PrivacyPolicy />} />
      <Route path="termsandcondition" element={<TermsAndCondition />} />
      <Route path="servercheck" element={<Test />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
