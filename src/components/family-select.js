import React from "react"
import PropTypes from "prop-types"

import Label from "./label"
import Select from "./select"

const FamilySelect = ({ title, value, active, disabled, onClick }) => {
  return (
    <div className="p-4">
      <Label
        text={title}
        active={active}
        disabled={disabled}
        onClick={onClick}
      />
      <Select
        value={value}
        active={active}
        disabled={disabled}
        onClick={onClick}
      />
    </div>
  )
}

FamilySelect.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

FamilySelect.defaultProps = {
  value: "",
}

export default FamilySelect
