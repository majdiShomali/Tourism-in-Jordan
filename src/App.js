import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header.js";
import Home from "./pages/Home.js";
import Extra from "./pages/Extra.js";
import petra from '../src/pages/petra.jpeg'; //
import sea from '../src/pages/sea.jpeg'; //
import { useState } from 'react'
import Footer from "./pages/Footer.js";

export default function App() {

  const [first, setfirst] = useState([
    {
     Id:0,
     name:"petra",
     info:"petra information",
     images:petra,
     price:10
    },
    {
      Id:1,
      name:"dead sea",
      info:"dead sea information",
      images:sea,
      price:10
     }
  
  ])

  return (
    <BrowserRouter>
     <Header />
      <Routes>
          <Route path="/" element={<Home initState5={first} />} />
          <Route path="Extra" element={<Extra />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}


