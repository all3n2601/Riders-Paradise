import React, { useState } from 'react';
import '../../styles/Profile.css';


const Profile = () => {
  
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [mobileNumber, setMobileNumber] = useState('');
 const [address, setAddress] = useState('');
 const [country, setCountry] = useState('');
 const [city, setCity] = useState('');
 const [state, setState] = useState('');
 const [pincode, setPincode] = useState('');
 const [ownershipStatus, setOwnershipStatus] = useState('');
 const [financeRequired, setFinanceRequired] = useState('');
 const [dateofBirth, setdateofBirth] = useState('');
 const [gender, setGender] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      firstName,
      lastName,
      dateofBirth,
      mobileNumber,
      address,
      country,
      city,
      state,
      pincode,
      ownershipStatus,
      financeRequired,
      email,
      password
    });
 };

 return (
  <div className='side-by-side'>
    <h1>Welcome to Rider's Paradise</h1>
    <h2 >User Profile</h2>
  
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-box">
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
      </div>

      <div class="form-box">
        <label class="date">Date of Birth</label>
        <input
        type="date"
        id="dateofBirth"
        value={dateofBirth}
        onChange={(e) => setdateofBirth(e.target.value)}
        />
        <label htmlFor="gender">Gender</label>
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
      </div>
      <div className="form-box">
        <label htmlFor="email">Email  id</label>
        <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className='form-box'>
        <label htmlFor="mobileNumber">Mobile</label>
        <input
        type="tel"
        id="mobileNumber"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className='form-box'>
        <label htmlFor="country">State</label>
        <input
        type="text"
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        />

        <label htmlFor="state">country</label>
        <input
        type="text"
        id="state"
        value={city}
        onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className='form-box'>
        <label htmlFor="city">City</label>
        <input
        type="text"
        id="city"
        value={state}
        onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="pincode">Pincode</label>
        <input
        type="text"
        id="pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      <p>To kknow about our privacy policy:</p>
      <button type="submit">privacy policy</button>
      <p>To reach out to us:</p>
      <button type="submit">contact us</button>
    </form>
  </div>
 );
};

export default Profile;
