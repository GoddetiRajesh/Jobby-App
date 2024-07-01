import EmploymentTypeItem from '../EmploymentTypeItem'
import SalaryRangeItem from '../SalaryRangeItem'
import LocationItem from '../LocationItem'

import './index.css'

const Filters = props => {
  const {
    employmentTypesList,
    salaryRangesList,
    locationsList,
    updateEmploymetTypes,
    updateSalaryRange,
    updateLocation,
  } = props
  return (
    <>
      <div className="employment-types-container">
        <h1 className="employment-types-heading">Type of Employment</h1>
        <ul className="employment-types-list">
          {employmentTypesList.map(eachItem => (
            <EmploymentTypeItem
              key={eachItem.employmentTypeId}
              type={eachItem}
              updateEmploymetTypes={updateEmploymetTypes}
            />
          ))}
        </ul>
      </div>
      <div className="employment-types-container">
        <h1 className="employment-types-heading">Salary Range</h1>
        <ul className="employment-types-list">
          {salaryRangesList.map(eachItem => (
            <SalaryRangeItem
              key={eachItem.salaryRangeId}
              range={eachItem}
              updateSalaryRange={updateSalaryRange}
            />
          ))}
        </ul>
      </div>
      <div className="employment-types-container">
        <h1 className="employment-types-heading">Location</h1>
        <ul className="employment-types-list">
          {locationsList.map(eachItem => (
            <LocationItem
              key={eachItem.locationId}
              type={eachItem}
              updateLocation={updateLocation}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Filters
