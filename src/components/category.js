import React from "react"
import PropTypes from "prop-types"

const Category = ({ name, value, active, onClick }) => {
  const defaultClassName =
    "inline-block px-3 py-1 mx-1 my-1 border rounded-full cursor-pointer"

  return (
    <span
      className={
        active
          ? `bg-red-500 text-white border-red-600 ${defaultClassName}`
          : `border-red-500 text-red-500 ${defaultClassName}`
      }
      onClick={() => onClick(value)}
    >
      {name}
    </span>
  )
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default Category
