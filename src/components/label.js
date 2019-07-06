import React from "react"
import PropTypes from "prop-types"

const Label = ({ text, active, disabled, onClick }) => {
  const className = () => {
    const base = "cursor-pointer mb-1"

    if (disabled) {
      return `${base} text-gray-500`
    }
    if (active) {
      return `${base} font-bold`
    }
    return base
  }

  return (
    <div className={className()} onClick={onClick}>
      {text}
    </div>
  )
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default Label
