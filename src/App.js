import "./App.css";
import ErrorMsg from "./components/ErrorMsg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import SuccessMsg from "./components/SuccessMsg";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Freelancer from "./pages/Freelancer";
import Vendor from "./pages/Vendor";
import FindWork from "./pages/FindWork";
import Client from "./pages/Client";
import Contact from "./pages/Contact";
import UpdateProfile from "./pages/UpdateProfile";
import Profile from "./pages/Profile";
function App() {
  return (
    <>
      {/* <Helmet>
        <script
          type="text/javascript"
          src="Site1 final/jquery.js"
          defer="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        ></script>
      </Helmet> */}

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/freelancer" element={<Freelancer />} />
        <Route exact path="/vendor" element={<Vendor />} />
        <Route exact path="/post-a-work" element={<Client />} />
        <Route exact path="/find-work" element={<FindWork />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/update-profile" element={<UpdateProfile />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
