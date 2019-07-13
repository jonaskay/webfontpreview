import React from "react"
import PropTypes from "prop-types"

const Family = ({ name, active, onClick }) => {
  const defaultClassName = "cursor-pointer m-0 p-2 border-b border-l text-xl"

  return (
    <li
      className={
        active
          ? `${defaultClassName} border-gray-800 bg-gray-700 text-white`
          : `${defaultClassName} bg-gray-100`
      }
      style={{ fontFamily: name }}
      onClick={() => onClick(name)}
    >
      {name}
    </li>
  )
}

Family.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default Family