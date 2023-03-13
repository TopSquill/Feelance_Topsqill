import "./App.css";
import ErrorMsg from "./components/ErrorMsg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

import SuccessMsg from "./components/SuccessMsg";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <Footer />
      {/* <ErrorMsg />
      <SuccessMsg /> */}
    </>
  );
}

export default App;
