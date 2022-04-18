import { Route, Routes } from "react-router-dom";
import About from "./Pages/Home/About/About";
import Blog from "./Pages/Home/Blog/Blog";
import Checkout from "./Pages/Home/Checkout_Page/Checkout";
import Home from "./Pages/Home/Home/Home/Home";
import Login from "./Pages/Home/Login_Pages/Login/Login";
import Register from "./Pages/Home/Login_Pages/Register/Register";
import NotFound from "./Pages/Home/Not_Found/NotFound";
import ProtectedRoute from "./Pages/Home/Protected_Route/ProtectedRoute";
import Footer from "./Pages/Shared/Navbar/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
