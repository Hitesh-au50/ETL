import React, { useState } from 'react';
import '../styles/StatementOfPurpose.css'
import { useNavigate } from 'react-router-dom'

const StatementOfPurpose = () => {
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const navigate = useNavigate();

  // Input change handlers
  const handleQuestion1Change = (e) => setQuestion1(e.target.value);
  const handleQuestion2Change = (e) => setQuestion2(e.target.value);
  const handleQuestion3Change = (e) => setQuestion3(e.target.value);

  const handleNextClick = () => {
    if (!question1 || !question2 || !question3) {
      alert("Field is empty");
    } else {
      navigate('/InterviewAvailability')
    };
  }

  return (
    <div className='container'>
      <h2 className='heading'>Statement of Purpose</h2>
      <form>
        <div>
          <label className='labels'>
            Tell me about a time you were asked to do something you had never done before.
            How did you react? What did you learn?*
          </label>
          <textarea
           className='textarea'
            value={question1}
            onChange={handleQuestion1Change}
            maxLength={300}
            required
          />
        </div>
        <div>
          <label className='labels'>
            Tell me about the last time something significant didn’t go according to plan at work.
            What was your role? What was the outcome?*
          </label>
          <textarea
           className='textarea'
            value={question2}
            onChange={handleQuestion2Change}
            maxLength={300}
            required
          />
        </div>
        <div>
          <label className='labels'>What are the three things that are most important to you in a job?*</label>
          <textarea
           className='textarea'
            value={question3}
            onChange={handleQuestion3Change}
            maxLength={300}
            required
          />
        </div>
        <button className='button' type="button" onClick={handleNextClick}>Next</button>
      </form>
    </div>
  );
};

export default StatementOfPurpose;
