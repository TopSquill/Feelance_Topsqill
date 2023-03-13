import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      {/* <SignUp /> */}
      <Footer />
    </>
  );
}

export default App;
