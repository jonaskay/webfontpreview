import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import FamilySelect from "./family-select"
import VariantSelect from "./variant-select"

const FontConfig = ({
  title,
  family,
  onFamilyClick,
  variant,
  variants,
  onVariantSelect,
  sidebar,
}) => (
  <div className="p-4">
    <FamilySelect
      title={title}
      value={family}
      active={title === sidebar}
      disabled={sidebar && title !== sidebar}
      onClick={() => onFamilyClick(title)}
    />
    <VariantSelect
      value={variant}
      options={variants}
      onSelect={onVariantSelect}
      disabled={!!sidebar}
    />
  </div>
)

FontConfig.propTypes = {
  title: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  onFamilyClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(PropTypes.string.isRequired),
  onVariantSelect: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  sidebar: state.sidebar,
})

export default connect(mapStateToProps)(FontConfig)
