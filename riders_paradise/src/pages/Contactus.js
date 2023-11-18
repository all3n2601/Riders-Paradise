import Contact from "../components/data/Contact";
import UserHeader from "../components/user/UserHeader";
import Footer from "../components/page/footer";
import Header from "../components/page/header";
import { userRole } from "../components/auth/auth";

function ContactusPage() {
  return userRole === "user" ? (
    <div>
      <UserHeader />
      <Contact />
      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactusPage;
