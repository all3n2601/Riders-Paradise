import TestRide from "../components/data/TestRide";
import Footer from "../components/page/footer";
import Header from "../components/page/header";
import UserHeader from "../components/user/UserHeader";
import { userRole } from "../components/auth/auth";

function TestRidePage() {
  return userRole === "user" ? (
    <div>
      <UserHeader />
      <TestRide />
      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      <TestRide />
      <Footer />
    </div>
  );
}

export default TestRidePage;
