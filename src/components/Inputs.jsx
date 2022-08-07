import { useState, useEffect } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import Loader from './Loader'

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("")
  const [formKey, setFormKey] = useState(10)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  // const handleUnitsChange = (e) => {
  //   const selectedUnit = e.currentTarget.name
  //   if (units !== selectedUnit) setUnits(selectedUnit)
  // }

  const handleSearchClick = (e) => {
    if (city !== '') {
      setQuery({q: city})
      setFormKey(formKey + 1)
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 5000)
    }
  }


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
  }

  return (
    <div className="flex flex-row">
      <div 
        key={formKey}
        className="flex flex-row w-11/12 items-center relative">
        <input 
          // value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearchClick()}
          type="text" 
          placeholder="Search for a city..."
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
      {/* <div className="flex flex-row w-1/4 items-center justify-center">
        <button
        name="metric"
        className="text-xl text-white font-light transition ease-out hover:scale-125"
        onClick={handleUnitsChange}
        >°C</button>
        <p className="text-xl text-white mx-1">|</p>
        <button
        name="imperial"
        className="text-xl text-white font-light transition ease-out hover:scale-125"
        onClick={handleUnitsChange}
        >°F</button>
      </div> */}
    </div>
  )
}

export default Inputs


