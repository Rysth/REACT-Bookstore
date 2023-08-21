import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={null} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
