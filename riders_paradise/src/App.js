import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function LandingPage() {
  return (
    <div className="page">
      <div className="header"></div>
      <div className="body"></div>
      <div className='footer'></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
