
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/Buttons/BackToTopButton";
import NavbarUpdated from "./NewComponents/NavbarUpdated";

function App() {
  return (
    <div className="font-googleFonts">
      <NavbarUpdated/>
      <ScrollToTop/>
      <Outlet/>
      <BackToTopButton/>
      <Footer />
    </div>
  );
}

export default App;
