import React, { useState } from "react"
import PropTypes from "prop-types"

import Option from "./option"
import List from "./list"
import settingsStyles from "./settings.module.css"

const { toggleEven, toggleOdd, expand } = settingsStyles

const Settings = ({ options }) => {
  const [selected, setSelected] = useState(null)
  const [animation, setAnimation] = useState(null)

  const renderOption = option => {
    const { name } = option
    const currentlySelected = name === selected

    const newAnimation = () => {
      if (animation === toggleEven) {
        return toggleOdd
      }
      return toggleEven
    }

    const handleClick = () => {
      if (currentlySelected) {
        setSelected(null)
      } else {
        if (selected) {
          setAnimation(newAnimation())
        } else {
          setAnimation(expand)
        }
        setSelected(name)
      }
    }

    return (
      <Option
        key={name}
        title={name}
        value={option.value}
        active={name === selected}
        disabled={selected && name !== selected}
        onClick={handleClick}
      />
    )
  }

  const renderList = option => (
    <List
      key={option.name}
      disabled={selected && option.name !== selected}
      selected={option.value}
      onSelect={family => option.onChange(family)}
    />
  )

  const defaultClassName = `flex h-full ${settingsStyles.transition}`

  return (
    <div
      className={
        selected
          ? `${defaultClassName} ${animation}`
          : `${defaultClassName} -mr-64`
      }
    >
      <div className="w-56 border-l">
        {options.map(option => renderOption(option))}
      </div>
      <div className="w-64 relative">
        {options.map(option => renderList(option))}
      </div>
    </div>
  )
}

Settings.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    })
  ),
}

Settings.defaultProps = {
  options: [],
}

export default Settings
