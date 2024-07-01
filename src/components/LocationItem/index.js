import './index.css'

const LocationItem = props => {
  const {type, updateLocation} = props
  const {label, locationId} = type
  const onClickCheckbox = () => {
    updateLocation(locationId)
  }
  return (
    <li className="location-type-item">
      <input
        onClick={onClickCheckbox}
        id={locationId}
        type="checkbox"
        className="checkbox-input"
        value={locationId}
      />
      <label htmlFor={locationId} className="checkbox-label">
        {label}
      </label>
    </li>
  )
}

export default LocationItem
