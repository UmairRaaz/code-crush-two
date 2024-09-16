import MainPage from "./components/MainPage";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/Buttons/BackToTopButton";

function App() {
  return (
    <div className="font-googleFonts">
      <NavBar />
      <ScrollToTop/>
      <Outlet/>
      <BackToTopButton/>
      <Footer />
    </div>
  );
}

export default App;
