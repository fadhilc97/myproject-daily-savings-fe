import { BrowserRouter, Routes, Route } from "react-router-dom";
import Savings from "./pages/Savings/Savings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Savings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
