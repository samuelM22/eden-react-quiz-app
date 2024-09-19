import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/Quizpage';
import ResultPage from './pages/Resultpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Quiz' element={<QuizPage />} />
        <Route path='/Result' element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
