import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Html } from "@react-three/drei";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import "../src/styles/styles.css";
import "./App.css";

import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/Homepage";
import { Ground } from "./models/3dmodel/Ground";
import { Bike } from "./models/3dmodel/Bike";
import Admin from "./components/admin/Admin";
import Header from "./components/page/header";
import Footer from "./components/page/footer";
import { Rings } from "./models/3dmodel/Rings";
import { Boxes } from "./models/3dmodel/Box";
import { FloatingGrid } from "./models/3dmodel/FloatingGrid";
import ExplorePage from "./pages/ExplorePage";
import AboutPage from "./pages/AboutPage";
import ContactusPage from "./pages/Contactus";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotpasswordPage from "./pages/ForgotpasswordPage";
import BikeDetailsPage from "./pages/BikeDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import TestRidePage from "./pages/TestRidePage";
import Payment from "./components/user/Payment";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";

import PrivateRoute from "./components/routes/PrivateRoute.js";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/password/forgot" element={<ForgotpasswordPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/contact" element={<ContactusPage />} />
            <Route path="/about" element={<AboutPage />} />
            
            <Route element={<PrivateRoute />}>
              <Route path="/user/home" element={<HomePage />} />
              <Route path="/user/about" element={<AboutPage />} />
              <Route path="/user/explore" element={<ExplorePage />} />
              <Route path="/user/contact" element={<ContactusPage />} />
              <Route path="/user/testride" element={<TestRidePage />} />
              <Route path="/user/registerbike" element={<RegistrationPage />} />
              <Route path="/user/profile" element={<ProfilePage />} />
              <Route path="/user/payment" element={<Payment />} />
              <Route
                path="/user/explore/bikes/:_id"
                element={<BikeDetailsPage />}
              />

              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

function LandingPage() {
  let navigate = useNavigate();

  const routechanege = () => {
    navigate("/user/explore/bikes/654e6695d0ebf3b537eab9cc");
  };

  const routechange = () => {
    navigate("/user/testride");
  };

  return (
    <div className="page">
      <Header />
      <div className="bodydiv">
        <Suspense fallback={null}>
          <Canvas shadows>
            <BikeShow />
            <Html fullscreen>
              <div className="overlay-content">
                <h3 className="heading3">THE POWER OF OPPOSITES</h3>
                <h1>DUCATI XDIAVEL S</h1>
                <div className="buttons-in">
                  <button
                    className="button-app"
                    style={{
                      background: "red",
                      border: "2px solid red",
                      color: "white",
                      padding: "10px 20px",
                      cursor: "pointer",
                      marginBlock: "20px",
                    }}
                    onClick={routechange}
                  >
                    Test Ride
                  </button>
                  <button
                    className="button-app"
                    style={{
                      background: "transparent",
                      border: "2px solid white",
                      color: "white",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                    onClick={routechanege}
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
        {/* <DepthOfField
          focusDistance={0.0035}
          focalLength={0.01}
          bokehScale={3}
          height={480}
        /> */}
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.6}
          width={300}
          height={300}
          kernelSize={5}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.025}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0012]}
        />
      </EffectComposer>
    </>
  );
}
