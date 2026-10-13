import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import ThemeDetail from "./pages/ThemeDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/themes/:slug" element={<ThemeDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
