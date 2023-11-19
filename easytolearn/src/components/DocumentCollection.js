import React, { useState } from 'react';
import '../styles/DocumentCollection.css'
import { useNavigate } from 'react-router-dom'

const DocumentCollection = () => {
  const [class10Mark, setClass10Mark] = useState('');
  const [class12Mark, setClass12Mark] = useState('');
  const [graduationMark, setGraduationMark] = useState('');
  const [postGraduationMark, setPostGraduationMark] = useState('');
  const [resume, setResume] = useState('');
  const [recommendationLetter, setRecommendationLetter] = useState('');
  const [salarySlips, setSalarySlips] = useState('');
  const [others, setOthers] = useState('');
  const navigate = useNavigate();

  // Input change handlers
  const handleClass10MarkChange = (e) => setClass10Mark(e.target.value);
  const handleClass12MarkChange = (e) => setClass12Mark(e.target.value);
  const handleGraduationMarkChange = (e) => setGraduationMark(e.target.value);
  const handlePostGraduationMarkChange = (e) => setPostGraduationMark(e.target.value);
  const handleResumeChange = (e) => setResume(e.target.value);
  const handleRecommendationLetterChange = (e) => setRecommendationLetter(e.target.value);
  const handleSalarySlipsChange = (e) => setSalarySlips(e.target.value);
  const handleOthersChange = (e) => setOthers(e.target.value);

  const handleNextClick = () => {
    if (!class10Mark || !class12Mark || !graduationMark || !resume){
            alert("Field is empty");
        }
        else{
            navigate('/StatementOfPurpose')
        }
  }

  return (
    <div className='container'>
      <h2 className='heading'>Document Collection</h2>
      <form>
        <div>
          <label className='labels'>Class 10 Marksheet*</label>
          <input className='inputs' type="text" value={class10Mark} onChange={handleClass10MarkChange} required />
        </div>
        <div>
          <label className='labels'>Class 12 Marksheet*</label>
          <input className='inputs' type="text" value={class12Mark} onChange={handleClass12MarkChange} required />
        </div>
        <div>
          <label className='labels'>Graduation Marksheet*</label>
          <input className='inputs' type="text" value={graduationMark} onChange={handleGraduationMarkChange} required />
        </div>
        <div>
          <label className='labels'>Post Graduation Marksheet</label>
          <input className='inputs' type="text" value={postGraduationMark} onChange={handlePostGraduationMarkChange} />
        </div>
        <div>
          <label className='labels'>Resume/CV*</label>
          <input className='file' type="file" value={resume} onChange={handleResumeChange} required />
        </div>
        <div>
          <label className='labels'>Recommendation Letter</label>
          <textarea
            value={recommendationLetter}
            onChange={handleRecommendationLetterChange}
            maxLength={300}
             className='textarea'
          />
        </div>
        <div>
          <label className='labels'>Salary Slips</label>
          <input className='file' type="file" value={salarySlips} onChange={handleSalarySlipsChange} />
        </div>
        <div>
          <label className='labels'>Others</label>
          <textarea
            value={others}
            onChange={handleOthersChange}
            maxLength={300}
             className='textarea'
          />
        </div>
        <button className='button' type="button" onClick={handleNextClick}>Next</button>
      </form>
    </div>
  );
};

export default DocumentCollection;
