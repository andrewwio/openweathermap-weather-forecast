import { useEffect, useState } from 'react'
import TopBanner from './components/TopBanner'
import TopButtons from './components/TopButtons'
// import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherService';
import CityNotFound from './components/CityNotFound'
import Loader from './components/Loader'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const App = () => {
  const [query, setQuery] = useState({q: "Chicago"});
  const [units, setUnits] = useState("imperial");
  const [weather, setWeather] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [city, setCity] = useState("");
  const [formKey, setFormKey] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data)
      })
    }

    fetchWeather().catch(err => {
      console.log(err);
      console.log("hello App31")
    });
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
    const data = await getFormattedWeatherData()
    .catch(err => {
      console.log(err)
      console.log("Hello App53")
    });
    console.log(data);
    if (data === undefined) {
      setNotFound(true)
    }
  }

  fetchWeather()    
  .catch(err => {
    console.log(err)
    console.log("Hello App64")
  });

  const handleSearchClick = (e) => {
    if (city !== '') {
      setQuery({q: city})
      setFormKey(formKey + 1)
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coors.longitude;

        setQuery({
          lat,
          lon
        })
      })
    }
  };


  return (
    <div className={`max-w-fit main py-5 px-4 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopBanner />
      <TopButtons setQuery={setQuery} />
      {/* <Inputs setQuery={setQuery} units={units} setUnits={setUnits}  /> */}
      <div className="flex flex-row">
      <div 
        key={formKey}
        className="flex flex-row w-11/12 items-center relative">
        <input 
          // value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearchClick()}
          type="text" 
          placeholder="Search cities..."
          className="text-xl text-gray-400 p-2 w-full shadow-xl pl-3 focus:outline-none"
        />

        { loading ? <Loader /> :

        <UilSearch 
          size={25}
          className="cursor-pointer text-gray-400 right-12 absolute"
          onClick={handleSearchClick}
        /> 
  }

        <UilLocationPoint 
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 relative left-5"
          onClick={handleLocationClick}
        />
      </div>
    </div>
      { notFound ? <CityNotFound /> : 
      (weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
    
          <Forecast title="HOURLY FORECAST" items={weather.hourly} />
          <Forecast title="DAILY FORECAST" items={weather.daily} />
        </div>
      ))
}
    </div>
  );
}

export default App;

