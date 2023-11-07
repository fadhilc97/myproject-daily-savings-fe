import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";
import Savings from "./pages/Savings/Savings";
import SavingsForm from "./pages/SavingsForm/SavingsForm";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PersistLoginRoute from "./routes/PersistLoginRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PersistLoginRoute />}>
          <Route element={<AuthRoute />}>
            <Route path="/" element={<Savings />} />
            <Route path="/savings/create" element={<SavingsForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
