import MainPage from "./components/MainPage";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <NavBar />
      {/* <MainPage /> */}
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
