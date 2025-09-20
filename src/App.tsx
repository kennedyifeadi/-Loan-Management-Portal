import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Coaches from "./pages/Coaches";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Dashboard.getLayout(<Dashboard />)} />
        <Route path="/coaches" element={Coaches.getLayout(<Coaches />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
