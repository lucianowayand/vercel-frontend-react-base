import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Models from "./pages/Models/Models";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { ModelDetails } from "./pages/ModelDetails/ModelDetails";
import { QuestionaryDetails } from "./pages/QuestionaryDetails/QuestionaryDetails";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:id" element={<ModelDetails />} />
          <Route
            path="/models/:modelId/questionaries/:questionaryId"
            element={<QuestionaryDetails />}
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
