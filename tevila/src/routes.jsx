import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
 import Privacy from "./pages/Terms";
import ScrollToTop from "./Scroll";
export default function AppRoutes() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/terminos-y-condiciones" element={<Terms/>} />
        <Route path="/politica-de-privacidad" element={<Privacy/>} />
      </Routes>
</>
  );
}
