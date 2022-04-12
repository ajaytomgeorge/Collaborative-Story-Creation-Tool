import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LogsPage from "./pages/LogsPage";
import StoryDisplay from "./pages/StoryDisplay";
import StoryRead from "./pages/StoryRead";
import SearchResults from "./pages/SearchResults";

import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route index element={<HomePage />} />
          <Route path="/publish/">
            <Route path=":id" element={<StoryDisplay />} />
            <Route path=":id/:lock" element={<StoryDisplay />} />
            <Route path="" element={<StoryDisplay />} />
          </Route>
          <Route path="read/:id" element={<StoryRead />} />
          <Route path="search/:searchString" element={<SearchResults />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="logs" element={<LogsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
