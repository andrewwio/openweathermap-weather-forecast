import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react'


const App = () => {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data)
      })
    }

    fetchWeather()
  }, [query, units])

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: 'london'});
    console.log(data);
  }

  fetchWeather();

  return (
    <div className="App">
      <TopButtons />
      <Inputs />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
    
          <Forecast title="HOURLY FORECAST" />
          <Forecast title="DAILY FORECAST" />
        </div>
      )}
    </div>
  );
}

export default App;
