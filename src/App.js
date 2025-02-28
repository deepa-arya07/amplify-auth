import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./page/Home";
// import About from "./component/Aout"
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/signup"></Route> */}
        </Routes>{" "}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
