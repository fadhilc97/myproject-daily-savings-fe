import { BrowserRouter, Routes, Route } from "react-router-dom";
import Savings from "./pages/Savings/Savings";
import SavingsForm from "./pages/SavingsForm/SavingsForm";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Savings />} />
        <Route path="/savings/create" element={<SavingsForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
