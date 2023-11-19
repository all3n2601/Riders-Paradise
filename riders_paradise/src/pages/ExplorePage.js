import Gridview from "../components/data/Gridview";
import Footer from "../components/page/footer";
import Header from "../components/page/header";
import UserHeader from "../components/user/UserHeader";
import { userRole } from "../components/auth/auth";

const ExplorePage = () => {
  return userRole === "user" ? (
    <div>
      <UserHeader />
      <Gridview />
      <Footer />
    </div>
  ) : (
    <>
      <Header />
      <Gridview />
      <Footer />
    </>
  );
};

export default ExplorePage;
