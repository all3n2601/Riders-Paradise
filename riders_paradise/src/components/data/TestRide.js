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
                        <tr className="tr-testride">
                            <td className="td-testride"><label className="label-testride" for="model">Model interested in<span className="span-testride">*</span></label></td>
                            <td className="td-testride">
                                <select className="model">
                                    <option value="">Select Model</option>
                                </select>
                            </td>
                            <td className="td-testride"><label className="label-testride" for="state">State<span className="span-testride">*</span></label></td>
                            <td className="td-testride">
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
                        <tr className="tr-testride">
                            <td className="td-testride"><label className="label-testride" for="city">City<span className="span-testride">*</span></label></td>
                            <td className="td-testride">
                                <select  className="city">
                                    <option value="">Select City</option>
                                </select>
                            </td>
                            <td className="td-testride"><label className="label-testride" for="dealer">Dealer<span className="span-testride">*</span></label></td>
                            <td className="td-testride">
                                <select className="dealer">
                                    <option value="">Select Dealer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="tr-testride">
                            <td className="td-testride"><label className="label-testride" for="name">Your Name<span className="span-testride">*</span></label></td>
                            <td className="td-testride"><input className="input-testride" type="text" placeholder="Your Name" id="name"/></td>
                            <td className="td-testride"><label className="label-testride" for="email">Email ID<span className="span-testride">*</span></label></td>
                            <td className="td-testride"><input className="input-testride" type="email" placeholder="Your Email" id="email"/></td>
                        </tr>
                        <tr className="tr-testride">
                            <td className="td-testride"><label className="label-testride" for="phno">Mobile<span className="span-testride">*</span></label></td>
                            <td className="td-testride"><input className="input-testride" type="number" id="phno" placeholder="Your Mobile" /></td>
                            <td className="td-testride"><label className="label-testride">Remarks/Suggestions</label></td>
                            <td className="td-testride"><textarea className="textarea-testride" placeholder="Remarks/Suggestions" cols="30" rows="3"></textarea></td>
                        </tr>
                        <tr className="tr-testride">
                            <td className="td-testride"><input className="tickboxlabel" type="checkbox"/></td>
                            <td className="td-testride"><label className="tickbox"> I agree to the terms and conditions</label></td>
                        </tr>
                        <tr className="td-testride">
                            <td className="td-testride"></td>
                            <td className="td-testride">
                                <input className="input-testride" type="submit" value="Submit"/>
                            </td>
                            <td className="td-testride">
                                <input className="input-testride" type="submit" value="Reset"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default TestRide;