import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import styled from "styled-components";

const ContactInfoContainer = styled.td`
  border: 1px solid black;
  height: 45vh;
  background-color: beige;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  font-weight: w100;
  margin-bottom: 10px;
  align-items: start;
  justidy-content: start;
`;

const Divider = styled.div`
  display: absolute;
  border-bottom: 1px solid #333;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: relative;
  align-items: start;
`;

const Icon = styled.img`
  vertical-align: start;
  margin-right: 5px;
`;

const Label = styled.span``;

const StyledLink = styled.a`
  text-decoration: none;
  color: #333;
`;

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
        <ContactInfoContainer>
          <div className="heading">Contact Information</div>
          <Divider />

          <ContactItem>
            <Icon src="images/pin.png" alt="" />
            <Label>Address:</Label>
            <StyledLink href="#" className="details-contactpage">
              Riders Paradise Chennai TamilNadu
            </StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/call.png" alt="" />
            <Label>Phone:</Label>
            <StyledLink
              href="tel:+919717785190"
              className="details1-contactpage"
            >
              +91-1234567890
            </StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/mail.png" alt="" />
            <Label>Email:</Label>
            <StyledLink
              href="mailto:admin@ridersparadise.com"
              className="details2-contactpage"
            >
              admin@ridersparadise.com
            </StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/mail.png" alt="" />
            <Label>Nodal Officer:</Label>
            <StyledLink
              href="mailto:eshop.support@heromotocorp.com"
              className="details2-contactpage"
            >
              Varun Venkateshs
            </StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/mail.png" alt="" />
            <Label>Grievance Officer:</Label>
            <StyledLink className="details2-contactpage">Manigandan</StyledLink>
          </ContactItem>
        </ContactInfoContainer>
      </table>
      <div class="div-contactpage">
        <button>SUBMIT</button>
      </div>
      <div class="header4-contactpage"></div>
    </div>
  );
}

export default Contact;
