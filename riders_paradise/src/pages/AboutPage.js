import About from "../components/page/About";
import Footer from "../components/page/footer";
import Header from "../components/page/header";
import { userRole } from "../components/auth/auth";
import UserHeader from "../components/user/UserHeader";

function AboutPage() {
  return userRole === "user" ? (
    <div>
      <UserHeader />
      <About />
      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
