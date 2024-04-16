import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={localStorage.getItem("auth_token") ? <Index /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
