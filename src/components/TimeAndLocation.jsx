import { formatToLocalTime } from '../services/weatherService'

const TimeAndLocation = ({weather: {dt, timezone, name, country}}) => {
  return (
    <div>
      <div>
        <p>
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div>
        <p>
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation




// import { formatToLocalTime } from '../services/weatherService'

// const TimeAndLocation = ({weather: {dt, timezone, name, country}}) => {
//   return (
//     <div>
//       <div>
//         <p>
//           {formatToLocalTime(dt, timezone)}
//         </p>
//       </div>
//       <div>
//         <p>
//           {`${name}, ${country}`}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default TimeAndLocation