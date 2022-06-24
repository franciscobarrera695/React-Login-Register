import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthLayout from "./layout/AuthLayout";
import { AuthProvider } from "./context/AuthProvider";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
