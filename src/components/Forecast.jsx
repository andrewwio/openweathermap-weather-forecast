import { iconUrlFromCode } from '../services/weatherService'

const Forecast = ({ title, items }) => {
  return (
    <div>
      <div>
        <p>{title}</p>
        <hr />

        <div>
          {items.map((item) => (
          <div>
            <p>{item.title}</p>
            <img 
            src={iconUrlFromCode(item.icon)}
            alt="" />
            <p>{`${item.temp.toFixed()}°`}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Forecast

