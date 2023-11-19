// import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import BasicDetails from './components/BasicDetails';
import DocumentCollection from './components/DocumentCollection';
import InterviewAvailability from './components/InterviewAvailability';
import StatementOfPurpose from './components/StatementOfPurpose';
import ThankYou from './components/ThankYou';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/BasicDetails" />} />
        <Route path="/BasicDetails" element={<BasicDetails />} />
        <Route path="/DocumentCollection" element={<DocumentCollection />} />
        <Route path="/StatementOfPurpose" element={<StatementOfPurpose />} />
        <Route path="/InterviewAvailability" element={<InterviewAvailability />} />
        <Route path="/ThankYou" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
