import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset
} from '@iconscout/react-unicons'
import { iconUrlFromCode, formatToLocalTime } from '../services/weatherService'

const TemperatureAndDetails = ({weather: {
  details, 
  icon, 
  temp, 
  temp_min, 
  temp_max, 
  sunrise, 
  sunset, 
  speed, 
  humidity, 
  feels_like, 
  timezone
}}) => {
  return (
    <div>
      <div>
        <p>{details}</p>
      </div>
      <div>
        <img 
        src={iconUrlFromCode(icon)}
        alt="" />
        <p>{`${temp.toFixed()}°`}</p>
        <div>
          <div>
            <UilTemperature />
            Feels Like:
            <span>{`${feels_like.toFixed()}°`}</span>
          </div>
          <div>
            <UilTear />
            Humidity:
            <span>{`${humidity.toFixed()}%`}</span>
          </div>
          <div>
            <UilWind />
            Wind:
            <span>{`${speed.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>
      <div>
        <UilSun />
        <p>
          Sunrise:
          <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p>|</p>
        <UilSunset />
        <p>
          Sunset:
          <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p>|</p>
        <UilSun />
        <p>
          High:
          <span>{`${temp_max.toFixed()}°`}</span>
        </p>
        <p>|</p>
        <UilSun />
        <p>
          Low:
          <span>{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  )
}

export default TemperatureAndDetails




// import {
//   UilTemperature,
//   UilTear,
//   UilWind,
//   UilSun,
//   UilSunset
// } from '@iconscout/react-unicons'
// import { iconUrlFromCode, formatToLocalTime } from '../services/weatherService'

// const TemperatureAndDetails = ({weather: {
//   details, 
//   icon, 
//   temp, 
//   temp_min, 
//   temp_max, 
//   sunrise, 
//   sunset, 
//   speed, 
//   humidity, 
//   feels_like, 
//   timezone
// }}) => {
//   return (
//     <div>
//       <div>
//         <p>{details}</p>
//       </div>
//       <div>
//         <img 
//         src={iconUrlFromCode(icon)}
//         alt="" />
//         <p>{`${temp.toFixed()}°`}</p>
//         <div>
//           <div>
//             <UilTemperature />
//             Feels Like:
//             <span>{`${feels_like.toFixed()}°`}</span>
//           </div>
//           <div>
//             <UilTear />
//             Humidity:
//             <span>{`${humidity.toFixed()}%`}</span>
//           </div>
//           <div>
//             <UilWind />
//             Wind:
//             <span>{`${speed.toFixed()}km/h`}</span>
//           </div>
//         </div>
//       </div>
//       <div>
//         <UilSun />
//         <p>
//           Sunrise:
//           <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
//         </p>
//         <p>|</p>
//         <UilSunset />
//         <p>
//           Sunset:
//           <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
//         </p>
//         <p>|</p>
//         <UilSun />
//         <p>
//           High:
//           <span>{`${temp_max.toFixed()}°`}</span>
//         </p>
//         <p>|</p>
//         <UilSun />
//         <p>
//           Low:
//           <span>{`${temp_min.toFixed()}°`}</span>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default TemperatureAndDetails