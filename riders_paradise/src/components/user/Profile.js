import React, { useState } from 'react';
import '../../styles/Profile.css';


const Profile = () => {
  
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [mobileNumber, setMobileNumber] = useState('');
 const [addressLine1, setAddressLine1] = useState('');
 const [addressLine2, setAddressLine2] = useState('');
 const [city, setCity] = useState('');
 const [state, setState] = useState('');
 const [pincode, setPincode] = useState('');
 const [ownershipStatus, setOwnershipStatus] = useState('');
 const [financeRequired, setFinanceRequired] = useState('');
 const [dateofBirth, setdateofBirth] = useState('');
 const [gender, setGender] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      firstName,
      lastName,
      dateofBirth,
      mobileNumber,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      ownershipStatus,
      financeRequired,
    });
 };

 return (
  <div className='side-by-side'>
    <h1 >USER PROFILE</h1>
  
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <label htmlFor="dateofBirth">Date of Birth</label>
      <input
        type="date"
        id="dateofBirth"
        value={dateofBirth}
        onChange={(e) => setdateofBirth(e.target.value)}
      />
      <label htmlFor="gender">Gender</label>
      {/* Gender radio button group */}
      <div className="gender-radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
            />
            Female
          </label>
        </div>

      <label htmlFor="mobileNumber">Mobile Number</label>
      <input
        type="text"
        id="mobileNumber"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />

      <label htmlFor="addressLine1">Address Line 1</label>
      <input
        type="text"
        id="addressLine1"
        value={addressLine1}
        onChange={(e) => setAddressLine1(e.target.value)}
      />

      <label htmlFor="addressLine2">Address Line 2</label>
      <input
        type="text"
        id="addressLine2"
        value={addressLine2}
        onChange={(e) => setAddressLine2(e.target.value)}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />

      <label htmlFor="pincode">Pincode</label>
      <input
        type="text"
        id="pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />

      <label htmlFor="ownershipStatus">Ownership Status</label>
      <input
        type="text"
        id="ownershipStatus"
        value={ownershipStatus}
        onChange={(e) => setOwnershipStatus(e.target.value)}
      />

      <label htmlFor="financeRequired">Finance Required</label>
      <input
        type="text"
        id="financeRequired"
        value={financeRequired}
        onChange={(e) => setFinanceRequired(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  </div>
 );
};

export default Profile;
