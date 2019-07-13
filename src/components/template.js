import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Template = ({ name, value }) => (
  <Link
    to="/preview"
    state={{ template: value }}
    className="border border-red-500 hover:border-red-600 text-red-500 hover:text-red-600 py-1 px-2 mx-1 rounded-full"
  >
    {name}
  </Link>
)

Template.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Template
