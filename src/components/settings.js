import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Toggle from "./toggle"
import Toolbar from "./toolbar"
import Typography from "./typography"
import settingsStyles from "./settings.module.css"
import { selectSidebar } from "../actions"

const { toggleEven, toggleOdd } = settingsStyles

const Settings = ({
  url,
  options,
  shareable,
  selectedTemplate,
  onSelectTemplate,
  sidebar,
  onSidebarChange,
}) => {
  const [open, setOpen] = useState(false)
  const [animation, setAnimation] = useState(null)

  const handleSelectText = name => {
    const nextAnimation = () => {
      if (animation === toggleEven) {
        return toggleOdd
      }
      return toggleEven
    }

    const isCurrentlySelected = name === sidebar

    if (isCurrentlySelected) {
      onSidebarChange(null)
    } else {
      if (sidebar) {
        setAnimation(nextAnimation())
      }
      onSidebarChange(name)
    }
  }

  const toggleToolbar = () => {
    setOpen(!open)
  }

  const defaultClassName = `fixed z-40 top-0 bottom-0 right-0 overflow-x-hidden flex items-start ${settingsStyles.transition}`

  return (
    <div
      className={
        sidebar
          ? `${defaultClassName} ${animation}`
          : `${defaultClassName} -mr-64`
      }
    >
      <Toggle open={open} onClick={toggleToolbar} />
      <Toolbar
        show={open}
        shareable={shareable}
        url={url}
        options={options}
        onSelectText={handleSelectText}
        selectedTemplate={selectedTemplate}
        onSelectTemplate={onSelectTemplate}
      />
      <Typography options={options} />
    </div>
  )
}

Settings.propTypes = {
  url: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    })
  ),
  shareable: PropTypes.bool,
  selectedTemplate: PropTypes.string,
  onSelectTemplate: PropTypes.func.isRequired,
  sidebar: PropTypes.string.isRequired,
  onSidebarChange: PropTypes.func.isRequired,
}

Settings.defaultProps = {
  options: [],
}

const mapStateToProps = state => ({
  sidebar: state.sidebar,
})

const mapDispatchToProps = dispatch => ({
  onSidebarChange: sidebar => dispatch(selectSidebar(sidebar)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
