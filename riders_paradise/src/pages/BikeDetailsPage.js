import BikeDetails from "../components/data/BikeDetails";
import Footer from "../components/page/footer";
import Header from "../components/page/header";
import { userRole } from "../components/auth/auth";
import UserHeader from "../components/user/UserHeader";

function BikeDetailsPage() {
  return userRole === "user" ? (
    <div>
      <UserHeader />
      <BikeDetails />
    </div>
  ) : (
    <div>
      <Header />
      <BikeDetails />
    </div>
  );
}

export default BikeDetailsPage;
