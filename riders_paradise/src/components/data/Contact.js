import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";

function Contact() {
  return (
    <div class="body-cotactpage">
      <h2 id="cus-contactpage">CONTACT US</h2>
      <table>
        <td id="first-contactpage">
          <div class="div-contactpage">Name</div>
          <input
            id="box1-contactpage"
            class="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
            type="text"
          />
          <div class="div-contactpage">Email</div>
          <input
            id="box2-contactpage"
            class="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
            type="text"
          />
          <div class="div-contactpage">Mobile</div>
          <input
            id="box3-contactpage"
            class="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
            type="text"
          />
          <div class="div-contactpage">comment</div>
          <input
            id="box4-contactpage"
            class="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
            type="text"
          />
        </td>
        <td id="second-contactpage">
          <div id="line1-contactpage">Contact Information</div>
          <div id="line2-contactpage">______________</div>
          <div>
            <img src="images/pin.png" alt="" />
            Address
            <Link class="details-contactpage">
              Hero MotoCorp Limited, The Grand Plaza,Vasant Kunj - Phase -II,
              New Delhi - 110070
            </Link>
          </div>
          <div>
            {" "}
            <img src="images/call.png" alt="" />
            Phone<Link class="details1-contactpage"> +91-9717785190</Link>
          </div>
          <div>
            <img src="images/mail .png" alt="" />
            Email
            <Link class="details2-contactpage">
              {" "}
              eshop.support@heromotocorp.com
            </Link>
          </div>
          <div class="line3-contactpage">
            Nodal Officer Mr. Ajay Kumar Raina
          </div>
          <div class="line4-contactpage">Grievance Officer: Gokul Ramesh</div>
        </td>
      </table>
      <div class="div-contactpage">
        <button>SUBMIT</button>
      </div>
      <div class="header4-contactpage"></div>
    </div>
  );
}

export default Contact;
