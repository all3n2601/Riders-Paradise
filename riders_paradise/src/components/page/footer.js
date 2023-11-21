import React from "react";

function Footer() {
  return (
    <footer
      className="footer-user"
      style={{
        minHeight: "10vh",
        position: "sticky",
        bottom: "0",
      }}
    >
      <div className="license">
        <span>This Project is Done By Team135</span>
      </div>
      <div>Riders Paradise</div>
      <div>Chennai India</div>
    </footer>
  );
}

export default Footer;
