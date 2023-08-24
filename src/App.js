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
  const { applicationID } = useSelector((store) => store.apps);

  useEffect(() => {
    dispatch(fetchApplication());
  }, [dispatch, applicationID]);

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={applicationID === '' ? 'Loading...' : <Home applicationID={applicationID} />}
            />
            <Route path="/categories" element={null} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
