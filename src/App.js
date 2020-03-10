import React, { useState, useEffect, useContext } from 'react';
import './App.scss';
import NavigationContainer from './Components/Navigation/NavigationContainer';
import MainView from './Components/MainView/MainView';
import config from './config';
import { Context } from './Context/Context';



function App() {

  const context = useContext(Context)
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);


  const fetchData = async () => {
    setLoading(true);
    setError(false)
    const moviesData = await fetch(`${config.API_ENDPOINT}/movie/popular?api_key=${config.API_KEY}`);
    await moviesData.json().then(data => context.setMovies(data.results)).catch(err => setError(err.status_message));
    setLoading(false);
    setDone(true);
  };

  useEffect(() => {
    fetchData()
  }, [])



  return (

    <div className="App">
      <header>
        <NavigationContainer />
      </header>

      {done ? (
        <MainView />
      ) : (
          <div>
            loading
          </div>
        )}

    </div>
  );
}

export default App;
