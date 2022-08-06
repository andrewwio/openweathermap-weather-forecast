import { formatToLocalTime } from '../services/weatherService'

const TimeAndLocation = ({weather: {dt, timezone, name, country}}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
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