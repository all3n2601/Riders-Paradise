import TestRide from "../components/data/TestRide";
import Footer from "../components/page/footer";
import Header from "../components/page/header";
import UserHeader from "../components/user/UserHeader";
import { userRole } from "../components/auth/auth";
import Registration from "../components/data/Registration";

function RegistrationPage() {
  return userRole === "user" ? (
    <div>
      <UserHeader />
      <Registration />
      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      <Registration />
      <Footer />
    </div>
  );
}

export default RegistrationPage;
