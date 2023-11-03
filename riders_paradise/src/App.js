import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ForgotPassword from "./pages/Forgotpassword";
import HomePage from "./pages/About";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "../src/styles/styles.css";
import { Ground } from "./models/Ground";

function BikeShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[1, 1, 1]} attach="background" />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={5.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={4}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
    </>
  );
}

function LandingPage() {
  return (
    <div className="page">
      <div className="header">
        <Link to="/" className="logo">
          Riders Paradise
        </Link>
        <nav class="nav-items">
          <Link className="leftnav" to="/">
            Home
          </Link>
          <Link className="leftnav" to="/about">
            About
          </Link>
          <Link className="leftnav" to="/contact">
            Contact Us
          </Link>
          <Link className="sign" to="/login">
            Sign In
          </Link>
        </nav>
      </div>
      <div className="body">
        <Suspense fallback={null}>
          <Canvas shadows>
            <BikeShow />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpwd" element={<ForgotPassword />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
