import React from "react"
import PropTypes from "prop-types"

const Family = ({ name, variants, active, onClick }) => {
  const defaultClassName = "cursor-pointer m-0 p-2 border-b border-l text-xl"

  return (
    <li
      className={
        active
          ? `${defaultClassName} border-black bg-black text-white`
          : `${defaultClassName} bg-gray-100`
      }
      style={{ fontFamily: name, marginLeft: -1 }}
      onClick={() => onClick(name, variants)}
    >
      {name}
    </li>
  )
}

Family.propTypes = {
  name: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default Family
