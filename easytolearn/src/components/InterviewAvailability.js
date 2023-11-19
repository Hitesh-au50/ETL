import React, { useState } from 'react';
import '../styles/InterviewAvailability.css'
import { useNavigate } from 'react-router-dom'

const InterviewAvailability = () => {
  const [interviewEmail, setInterviewEmail] = useState('');
  const [interviewLocation, setInterviewLocation] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewTime, setInterviewTime] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [interviewMedium, setInterviewMedium] = useState('');
  const navigate = useNavigate();

  // Input change handlers
  const handleInterviewEmailChange = (e) => setInterviewEmail(e.target.value);
  const handleInterviewLocationChange = (e) => setInterviewLocation(e.target.value);
  const handleInterviewDateChange = (e) => setInterviewDate(e.target.value);
  const handleInterviewTimeChange = (e) => setInterviewTime(e.target.value);
  const handleTimeZoneChange = (e) => setTimeZone(e.target.value);
  const handleInterviewMediumChange = (e) => setInterviewMedium(e.target.value);

  const handleNextClick = () => {
    if (!interviewEmail || !interviewLocation || !interviewMedium){
        alert('Field is empty ')
    }else{
        navigate('/ThankYou')
    }
  }

  return (
    <div className='container'>
      <h2 className='heading'>Interview Availability</h2>
      <form>
        <div>
          <label className='labels'>Email*</label>
          <input className='inputs' type="email" value={interviewEmail} onChange={handleInterviewEmailChange} required />
        </div>
        <div>
          <label className='labels'>Location*</label>
          <input className='inputs' type="text" value={interviewLocation} onChange={handleInterviewLocationChange} required />
        </div>
        <div>
          <label className='labels'>Interview Date (Date)</label>
          <input className='date' type="date" value={interviewDate} onChange={handleInterviewDateChange}  />
        </div>
        <div>
          <label className='labels'>Interview Time (Time)</label>
          <input className='time' type="time" value={interviewTime} onChange={handleInterviewTimeChange}  />
        </div>
        <div>
          <label className='labels'>Time Zone</label>
          <select className='select' value={timeZone} onChange={handleTimeZoneChange} >
            <option value="">Time-Zone</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <div>
          <label className='labels'>Interview Medium*</label>
          <select className='select' value={interviewMedium} onChange={handleInterviewMediumChange} required>
            <option value="">Select Medium</option>
            <option value="In-Person">In-Person</option>
            <option value="Phone">Phone</option>
            <option value="Video">Video</option>
          </select>
        </div>
        <button className='button' type="button" onClick={handleNextClick}>Submit</button>
      </form>
    </div>
  );
};

export default InterviewAvailability;
