import React from "react"
import PropTypes from "prop-types"

const Template = ({ children, width, height }) => (
  <div className="m-6 border bg-white" style={{ width, height }}>
    {children}
  </div>
)

Template.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default Template
