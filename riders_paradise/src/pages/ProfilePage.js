import Profile from "../components/user/Profile";
import Footer from "../components/page/footer";
import { userRole } from "../components/auth/auth";
import UserHeader from "../components/user/UserHeader";
import Forbidden from "../components/auth/Forbidden";

function ProfilePage() {
  return userRole === "user" ? (
    <div>
      <UserHeader />
      <Profile />
      <Footer />
    </div>
  ) : (
    <div>
      <Forbidden />
    </div>
  );
}

export default ProfilePage;
