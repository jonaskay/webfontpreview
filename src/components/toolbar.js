import React from "react"
import PropTypes from "prop-types"

import Option from "./option"
import toolbarStyles from "./toolbar.module.css"

const Toolbar = ({ show, options, selected, onSelect }) => {
  const renderOption = option => {
    const { name } = option

    return (
      <Option
        key={name}
        title={name}
        value={option.value}
        active={name === selected}
        disabled={selected && name !== selected}
        onClick={() => onSelect(name)}
      />
    )
  }

  const defaultClassName = `flex-none w-64 md:w-56 h-full border-l lg:mr-0 bg-white ${toolbarStyles.transition}`

  return (
    <div
      className={
        show
          ? `${defaultClassName} mr-0`
          : `${defaultClassName} -mr-64 md:-mr-56`
      }
    >
      {options.map(option => renderOption(option))}
    </div>
  )
}

Toolbar.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    })
  ),
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
}

export default Toolbar
