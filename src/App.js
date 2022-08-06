import { useEffect, useState } from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherService';
import { UilSearch } from '@iconscout/react-unicons'


const App = () => {
  const [query, setQuery] = useState({ q: "Chicago" });
  const [units, setUnits] = useState("imperial");
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("")
  const [formKey, setFormKey] = useState(10)

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
    const threshold = (units === 'metric' ? 30 : 60 || units === 'imperial' ? 85 : 150)
    // const daylight = whatever if !daylight then dark mode
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700"
    return "from-yellow-700 to-orange-700"
  }

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: 'london'});
    console.log(data);
  }

  fetchWeather();

  const searchCity = () => {
    resetSearch()
    handleSearchClick()
  }

  const handleSearchClick = () => {
    setQuery({q: city})
  }
  const resetSearch = () => {
    setFormKey(formKey + 1)
  }

  return (
    <div className={`mx-auto max-w-fit py-5 px-4 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}  />
      
      <div 
        className="flex flex-row w-11/12 space-x-1 items-center relative"
        key={formKey}
      >
        <input 
          type="text" 
          className="text-xl text-gray-400 p-2 w-full shadow-xl pl-3 focus:outline-none"
          placeholder="Search for a city..." 
          // value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyPress={(e) => e.key === 'Enter' && searchCity()} 
        />
        <UilSearch 
          size={25} 
          className="cursor-pointer text-gray-400 absolute right-12" 
          onClick={searchCity} 
        />
      </div>

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

