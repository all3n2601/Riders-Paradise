import { userRole } from "../components/auth/auth";
import Gridview from "../components/data/Gridview";
import Footer from "../components/page/footer";
import Header from "../components/page/header";
import UserHeader from "../components/user/UserHeader";

function GridviewPage() {
  return userRole === "user" ? (
    <div>
      <UserHeader />
      <Gridview />
      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      <Gridview />
      <Footer />
    </div>
  );
}

export default GridviewPage;
