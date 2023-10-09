import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { TrainSelectionPage } from './pages/TrainSelectionPage/TrainSelectionPage';

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/train-selection" element={<TrainSelectionPage />} />
      </Routes>
    </div>
  );
};

export default App;
