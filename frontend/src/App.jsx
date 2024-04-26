import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Aboutpage from "./pages/About";
import Propertiespage from "./pages/Properties";
import Contactpage from "./pages/Contact";
import Loginpage from "./pages/Login";
import Registerpage from "./pages/Register";
import Profilepage from "./pages/Profile";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/properties" element={<Propertiespage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
