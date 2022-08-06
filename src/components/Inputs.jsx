import { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("")

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit) setUnits(selectedUnit)
  }

  const handleSearchClick = () => {
    if (city !== '') setQuery({q: city})

  }

  // const handleLocationClick = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       let lat = position.coords.latitude;
  //       let lon = position.coors.longitude;

  //       setQuery({
  //         lat,
  //         lon
  //       })
  //     })
  //   }
  // }

  return (
    <div className="flex flex-row justify-center my-6">
      <div  className="flex flex-row w-3/4 items-center relative">
        <input 
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text" 
          placeholder="Search for a city..."
          className="text-xl text-gray-400 p-2 w-full shadow-xl pl-3 focus:outline-none"
        />
        <UilSearch 
        size={25}
        className="cursor-pointer text-gray-400 absolute right-4"
        onClick={handleSearchClick}
        />
        {/* <UilLocationPoint 
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-125"
        onClick={handleLocationClick}
        /> */}
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
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
      </div>
    </div>
  )
}

export default Inputs


