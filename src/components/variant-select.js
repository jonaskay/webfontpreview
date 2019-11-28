import React, { useEffect } from "react"
import PropTypes from "prop-types"

import loadWebFonts from "../utilities/load-web-fonts"

const VariantSelect = ({ value, options, onSelect, familyName }) => {
  useEffect(() => {
    loadWebFonts([`${familyName}:${value}`])
  }, [value])

  const handleChange = event => onSelect(event.target.value)

  return (
    <>
      <span className="mr-2">Variant</span>
      <select value={value} onChange={handleChange}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

VariantSelect.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
  familyName: PropTypes.string,
}

VariantSelect.defaultProps = {
  options: [],
}

export default VariantSelect
