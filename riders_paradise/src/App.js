import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Html } from "@react-three/drei";
import SignUp from "./pages/Signup";
import ForgotPassword from "./pages/Forgotpassword";
import HomePage from "./pages/About";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "../src/styles/styles.css";
import { Ground } from "./models/Ground";
import { Bike } from "./models/Bike";
import Admin from "./pages/Admin";
import Header from "./components/header";
import Footer from "./components/footer";
import { Rings } from "./models/Rings";
import { Boxes } from "./models/Box";
import { FloatingGrid } from "./models/FloatingGrid";

function BikeShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Bike />
          </>
        )}
      </CubeCamera>

      <spotLight
        color={[1, 1, 1]}
        intensity={25}
        angle={Math.PI}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={25}
        angle={Math.PI}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
      <FloatingGrid />
      <Boxes />
      <Rings />

      <EffectComposer>
        {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.3} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset
        />
      </EffectComposer>
    </>
  );
}

function LandingPage() {
  return (
    <div className="page">
      <Header />
      <div className="body">
        <Suspense fallback={null}>
          <Canvas shadows>
            <BikeShow />
            <Html fullscreen>
              <div className="overlay-content">
                <h3>THE POWER OF OPPOSITES</h3>
                <h1>DUCATI XDIAVEL S</h1>
                <div className="buttons-in">
                  <button
                    style={{
                      background: "red",
                      border: "2px solid red",
                      color: "white",
                      padding: "10px 20px",
                      cursor: "pointer",
                      marginBlock: "20px",
                    }}
                  >
                    Test Ride
                  </button>
                  <button
                    style={{
                      background: "transparent",
                      border: "2px solid white",
                      color: "white",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </Html>
          </Canvas>
        </Suspense>
      </div>
      <Footer />
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
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
