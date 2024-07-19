import MainPage from "./components/MainPage";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="">
      <NavBar />
      <ScrollToTop/>
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
