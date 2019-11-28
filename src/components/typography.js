import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { selectHeadingFont, selectBodyFont, selectSidebar } from "../actions"
import List from "./list"
import typogprahyStyles from "./typography.module.css"

const Typography = ({
  headingFont,
  onHeadingFontSelect,
  bodyFont,
  onBodyFontSelect,
  onClose,
  sidebar,
}) => {
  const renderList = (title, onSelect, font) => {
    return (
      <List
        key={title}
        title={`Choose ${title.toLowerCase()}`}
        disabled={sidebar && title !== sidebar}
        selected={font.family}
        onSelect={(family, variants) => onSelect(family, variants)}
        onClose={onClose}
      />
    )
  }

  const defaultClassName = `flex-none w-64 relative h-full ${typogprahyStyles.transition}`

  return (
    <div
      className={
        sidebar
          ? `-ml-64 md:ml-0 ${defaultClassName}`
          : `ml-0 ${defaultClassName}`
      }
    >
      {renderList("Heading", onHeadingFontSelect, headingFont)}
      {renderList("Body", onBodyFontSelect, bodyFont)}
    </div>
  )
}

Typography.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    })
  ).isRequired,
  headingFont: PropTypes.shape({
    family: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  bodyFont: PropTypes.shape({
    family: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  selected: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  sidebar: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  headingFont: state.headingFont,
  bodyFont: state.bodyFont,
  sidebar: state.sidebar,
})

const mapDispatchToProps = dispatch => ({
  onHeadingFontSelect: (family, variants) =>
    dispatch(selectHeadingFont(family, variants)),
  onBodyFontSelect: (family, variants) =>
    dispatch(selectBodyFont(family, variants)),
  onClose: () => dispatch(selectSidebar(null)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Typography)
