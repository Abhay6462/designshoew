import Layout from "./Components/Layout/Layout";
import '../src/index.css'
import { Route, Routes } from "react-router-dom";
import Slider from "./Pages/Slider/Slider";
import Login from "./Components/Form/Login";
import SignUp from "./Components/Form/SignUp";
import MainMiddle from "./Pages/Middle/MainMiddle";
import Footer from "./Components/Layout/Footer/Footer";

function App() {
  return (
    <>
    <Layout/>
    <Routes>
      <Route path="/" element={<Slider/>}>
      <Route path="/" element={<MainMiddle/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
