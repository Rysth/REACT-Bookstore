import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApplication } from './redux/apps/appsSlice';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Pages/Home';

function App() {
  /* Create the Application ID */
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.apps);

  useEffect(() => {
    dispatch(fetchApplication());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={isLoading ? 'Loading...' : <Home />} />
            <Route path="/categories" element={null} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
