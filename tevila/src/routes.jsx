import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./Scroll";
export default function AppRoutes() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home/>} />
  
      </Routes>
</>
  );
}
