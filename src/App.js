import { useEffect, useState } from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherService';

const App = () => {
  const [query, setQuery] = useState({ q: "Chicago" });
  const [units, setUnits] = useState("imperial");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data)
      })
    }

    fetchWeather()
  }, [query, units])

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700"
    const warmWeather = (units === 'metric' ? 28 : 60 || units === 'imperial' ? 82 : 150)
    const coldWeather = (units === 'metric' ? 0 : 28 || units === 'imperial' ? 32 : 82)
    // const daylight = whatever if !daylight then dark mode
    if (weather.temp >= warmWeather) {
      return "from-yellow-700 to-orange-700"
    } else if (weather.temp <= coldWeather) {
      return "from-gray-200 to-white-700"
    } else {
      return "from-cyan-700 to-blue-700"
    }
  }

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: 'london'});
    console.log(data);
  }

  fetchWeather();

  return (
    <div className={`mx-auto max-w-fit py-5 px-4 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}  />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
    
          <Forecast title="HOURLY FORECAST" items={weather.hourly} />
          <Forecast title="DAILY FORECAST" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;

