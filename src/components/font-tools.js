import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const FontTools = ({ title, family, variant, variants, sidebar }) => (
  <div className="p-4">
    <FamilySelect
      title={title}
      value={family}
      active={title === sidebar}
      disabled={sidebar && title !== sidebar}
    />
    <VariantSelect
      value={variant}
      options={variants}
      familyName={family}
      disabled={!!sidebar}
    />
  </div>
)

FontTools.propTypes = {
  title: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(PropTypes.string.isRequired),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
}

const mapStateToProps = state => ({
  sidebar: state.sidebar,
})

export default connect(mapStateToProps)(Font)
