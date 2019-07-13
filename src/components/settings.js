import React, { useState } from "react"
import PropTypes from "prop-types"

import Toggle from "./toggle"
import Toolbar from "./toolbar"
import Typography from "./typography"
import settingsStyles from "./settings.module.css"

const { toggleEven, toggleOdd, expand } = settingsStyles

const Settings = ({ options, selectedTemplate, onSelectTemplate }) => {
  const [open, setOpen] = useState(false)
  const [selectedText, setSelectedText] = useState(null)
  const [animation, setAnimation] = useState(null)

  const handleSelectText = name => {
    const nextAnimation = () => {
      if (animation === toggleEven) {
        return toggleOdd
      }
      return toggleEven
    }

    const isCurrentlySelected = name === selectedText

    if (isCurrentlySelected) {
      setSelectedText(null)
    } else {
      if (selectedText) {
        setAnimation(nextAnimation())
      } else {
        setAnimation(expand)
      }
      setSelectedText(name)
    }
  }

  const toggleToolbar = () => {
    if (open) {
      setSelectedText(null)
    }
    setOpen(!open)
  }

  const defaultClassName = `fixed z-40 top-0 bottom-0 right-0 overflow-x-hidden flex items-start ${settingsStyles.transition}`

  return (
    <div
      className={
        selectedText
          ? `${defaultClassName} ${animation}`
          : `${defaultClassName} -mr-64`
      }
    >
      <Toggle open={open} onClick={toggleToolbar} />
      <Toolbar
        show={open}
        options={options}
        selectedText={selectedText}
        onSelectText={handleSelectText}
        selectedTemplate={selectedTemplate}
        onSelectTemplate={onSelectTemplate}
      />
      <Typography
        options={options}
        selected={selectedText}
        onClose={() => setSelectedText(null)}
      />
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
  selectedTemplate: PropTypes.string,
  onSelectTemplate: PropTypes.func.isRequired,
}

Settings.defaultProps = {
  options: [],
}

export default Settings
