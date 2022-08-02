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
    <div>
      <div>
        <input 
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text" 
          placeholder="Search for city..."
        />
        <UilSearch 
        onClick={handleSearchClick}
        />
        <UilLocationPoint 
        onClick={handleLocationClick}
        />
      </div>
      <div>
        <button
        name="metric"
        onClick={handleUnitsChange}
        >°C</button>
        <p>|</p>
        <button
        name="imperial"
        onClick={handleUnitsChange}
        >°F</button>
      </div>
    </div>
  )
}

export default Inputs




// import { useState } from 'react'
// import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

// const Inputs = ({ setQuery, units, setUnits }) => {
//   const [city, setCity] = useState("")

//   const handleUnitsChange = (e) => {
//     const selectedUnit = e.currentTarget.name
//     if (units !== selectedUnit) setUnits(selectedUnit)
//   }

//   const handleSearchClick = () => {
//     if (city !== '') setQuery({q: city})
//   }

//   const handleLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         let lat = position.coords.latitude;
//         let lon = position.coors.longitude;

//         setQuery({
//           lat,
//           lon
//         })
//       })
//     }
//   }

//   return (
//     <div>
//       <div>
//         <input 
//           value={city}
//           onChange={(e) => setCity(e.currentTarget.value)}
//           type="text" 
//           placeholder="Search for city..."
//         />
//         <UilSearch 
//         onClick={handleSearchClick}
//         />
//         <UilLocationPoint 
//         onClick={handleLocationClick}
//         />
//       </div>
//       <div>
//         <button
//         name="metric"
//         onClick={handleUnitsChange}
//         >°C</button>
//         <p>|</p>
//         <button
//         name="imperial"
//         onClick={handleUnitsChange}
//         >°F</button>
//       </div>
//     </div>
//   )
// }

// export default Inputs