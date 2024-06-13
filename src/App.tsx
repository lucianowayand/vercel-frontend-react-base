import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Models from "./pages/Models/Models";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/models" element={<Models/>} />
      </Routes>
    </BrowserRouter>
  );
}