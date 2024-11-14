import React from "react";

import "./css/bootstrap.css"; //It is recommended to put here than main.jsx
import "./css/styles.css";

// import Header from "./components/Header/Header";
// import AlertSection from "./components/AlertSection/AlertSection";
import Main from "./Components/Main/Main";
// import Footer from "./components/Footer/Footer";
import Mac from "../src/Components/Pages/Mac/Mac";
import Iphone from "../src/Components/Pages/Iphone/iphone";
import Ipad from "../src/Components/Pages/Ipad/Ipad";
import Watch from "./Components/Pages/Watch/Watch";
import Music from "./Components/Pages/Music/Music";
import { Routes, Route } from "react-router-dom";
import Support from "./Components/Pages/Support/Support";
import Search from "./Components/Pages/Search/Search";
import Cart from "./Components/Pages/Cart/Cart";
import Tv from "./Components/Pages/TV/Tv";
import Four04 from "./Components/Pages/Four04/Four04";
import SharedLayout from "./Components/Pages/SharedLayout";
import SharedVideo from "./Components/SharedVideo";
import ProductPage from "./Components/Pages/ProductPage/ProductPage.jsx";

function App() {
  return (
    // <></> Code fragment can be helpful when you need to return multiple elements from a component or render block but don’t want to wrap them in a div or any other tag.
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/Iphone" element={<Iphone />} />
          <Route path="/Iphone/:productID" element={<ProductPage />} />
          <Route path="/Ipad" element={<Ipad />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/" element={<SharedVideo />}>
            <Route path="/tv" element={<Tv />} />
            <Route path="/Music" element={<Music />} />
          </Route>
          <Route path="/Support" element={<Support />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
