import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invoice" element={<Invoice />} />
    </Routes>
  );
}