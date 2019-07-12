import React, { useState } from "react"
import PropTypes from "prop-types"

import Toggle from "./toggle"
import Toolbar from "./toolbar"
import Typography from "./typography"
import settingsStyles from "./settings.module.css"

const { toggleEven, toggleOdd, expand } = settingsStyles

const Settings = ({ options }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [animation, setAnimation] = useState(null)

  const handleSelect = name => {
    const nextAnimation = () => {
      if (animation === toggleEven) {
        return toggleOdd
      }
      return toggleEven
    }

    const isCurrentlySelected = name === selected

    if (isCurrentlySelected) {
      setSelected(null)
    } else {
      if (selected) {
        setAnimation(nextAnimation())
      } else {
        setAnimation(expand)
      }
      setSelected(name)
    }
  }

  const toggleToolbar = () => {
    if (open) {
      setSelected(null)
    }
    setOpen(!open)
  }

  const defaultClassName = `fixed top-0 bottom-0 right-0 overflow-x-hidden flex items-start ${settingsStyles.transition}`

  return (
    <div
      className={
        selected
          ? `${defaultClassName} ${animation}`
          : `${defaultClassName} -mr-64`
      }
    >
      <Toggle open={open} onClick={toggleToolbar} />
      <Toolbar
        show={open}
        options={options}
        selected={selected}
        onSelect={handleSelect}
      />
      <Typography
        options={options}
        selected={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}

Settings.propTypes = {
  open: PropTypes.bool,
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
