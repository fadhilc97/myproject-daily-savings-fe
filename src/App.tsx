import { BrowserRouter, Routes, Route } from "react-router-dom";
import Savings from "./pages/Savings/Savings";
import SavingsForm from "./pages/SavingsForm/SavingsForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Savings />} />
        <Route path="/savings/create" element={<SavingsForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
