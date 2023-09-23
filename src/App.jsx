import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Product from "./pages/Product";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
