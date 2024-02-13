import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import Favorites from "./pages/favorite";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
