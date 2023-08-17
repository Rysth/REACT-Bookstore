import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/categories" element={null} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
