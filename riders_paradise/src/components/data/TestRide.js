import React from "react";
import "../../styles/TestRide.css";

function TestRide() {
    return(
        <div className="main">
            <div className="header">

            </div>
            <div className="maincontent">
                <form>
                    <table>
                        <tr>
                            <td><label for="model">Model interested in<span>*</span></label></td>
                            <td>
                                <select className="model">
                                    <option value="">Select Model</option>
                                </select>
                            </td>
                            <td><label for="state">State<span>*</span></label></td>
                            <td>
                                <select className="state">
                                    <option value="">Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="city">City<span>*</span></label></td>
                            <td>
                                <select  className="city">
                                    <option value="">Select City</option>
                                </select>
                            </td>
                            <td><label for="dealer">Dealer<span>*</span></label></td>
                            <td>
                                <select className="dealer">
                                    <option value="">Select Dealer</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="name">Your Name<span>*</span></label></td>
                            <td><input type="text" placeholder="Your Name" id="name"/></td>
                            <td><label for="email">Email ID<span>*</span></label></td>
                            <td><input type="email" placeholder="Your Email" id="email"/></td>
                        </tr>
                        <tr>
                            <td><label for="phno">Mobile<span>*</span></label></td>
                            <td><input type="number" id="phno" placeholder="Your Mobile" /></td>
                            <td><label>Remarks/Suggestions</label></td>
                            <td><textarea placeholder="Remarks/Suggestions" cols="30" rows="3"></textarea></td>
                        </tr>
                        <tr>
                            <input className="tickboxlabel" type="checkbox"/>
                            <label className="tickbox"> I agree to the terms and conditions</label>
                        </tr>
                        <tr className="btn" colspan="2">
                            <td className="submitbtn">
                                <input type="submit" value="Submit"/>
                            </td>
                            <td className="resetbtn">
                                <input type="submit" value="Reset"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default TestRide;