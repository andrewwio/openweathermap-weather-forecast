import React from 'react'

const TimeAndLocation = () => {
  return (
    <div>
      <div>
        <p>
          Tuesday, 31 May 2022 | Local Time: 12:46pm
        </p>
      </div>
      <div>
        <p>
          Orlando, FL USA
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation

// import { formatToLocalTime } from '../services/weatherService';

// const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
//   return (
//     <div>
//       <div className="flex items-center justify-center my-6">
//         <p className="text-white text-xl font-extralight">
//           {formatToLocalTime(dt, timezone)}
//         </p>
//       </div>

//       <div className="flex items-center justify-center my-3">
//         <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
//       </div>
//     </div>
//   );
// }

// export default TimeAndLocation;