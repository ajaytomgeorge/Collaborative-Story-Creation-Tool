import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Routes>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp/>} />
            <Route index element={<HomePage />} />
            <Route path="publish" element={<StoryPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
