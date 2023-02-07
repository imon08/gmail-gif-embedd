import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import VideoOne from "./components/VideoOne";
import VideoTwo from "./components/VideoTwo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videoone" element={<VideoOne />} />
          <Route path="/videotwo" element={<VideoTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
