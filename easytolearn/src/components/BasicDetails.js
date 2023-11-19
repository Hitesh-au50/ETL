import React, { useState } from 'react';
import '../styles/BasicDetails.css'
import { useNavigate } from 'react-router-dom'


const BasicDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const navigate = useNavigate();

  // Input change handlers
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMobileChange = (e) => setMobile(e.target.value);
  const handleDobChange = (e) => setDob(e.target.value);
  const handleNextClick = () => {
    if (!name || !email) {
      alert("Field is empty")
    } else {
      navigate('/DocumentCollection')
    }
  }

  return (
    <div className='container'>
      <h2 className='heading'>Basic Details</h2>
      <form>
        <div>
          <label className='labels'>Name*</label>
          <input className='inputs' type="text" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label className='labels'>Email*</label>
          <input className='inputs' type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label className='labels'>Mobile Number</label>
          <input className='inputs' type="tel" value={mobile} onChange={handleMobileChange} />
        </div>
        <div>
          <label className='labels'>Date Of Birth</label>
          <input className='inputs' type="date" value={dob} onChange={handleDobChange} />
        </div>
        <button className='button' type="button" onClick={handleNextClick}>Next</button>
      </form>
    </div>
  );
};

export default BasicDetails;
