import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Models from "./pages/Models/Models";
import { AuthContextProvider } from "./context/AuthContextProvider";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/models" element={<Models />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
