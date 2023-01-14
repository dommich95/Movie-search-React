import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectedMovie from './components/SelectedMovie';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/result/movie/:id" element={<SelectedMovie />} />
      </Routes>
  </Router>
   
  );
}

export default App;
