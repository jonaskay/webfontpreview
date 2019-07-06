import React from "react"
import PropTypes from "prop-types"

const Select = ({ value, active, disabled, onClick }) => {
  const className = () => {
    const base = "cursor-pointer px-2 py-1 border"

    if (disabled) {
      return `${base} text-gray-500 bg-gray-100 border-gray-300`
    }
    if (active) {
      return `${base} text-white bg-gray-700 border-gray-800`
    }
    return `${base} bg-gray-100`
  }

  return (
    <div
      className={className()}
      style={value && { fontFamily: value }}
      onClick={onClick}
    >
      {value || "-"}
      <span className="float-right">></span>
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default Select
