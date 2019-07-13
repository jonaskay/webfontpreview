import React from "react"
import PropTypes from "prop-types"

const TemplateOption = ({ name, active, onClick }) => {
  const defaultClassName = "border my-2 px-2 py-1 cursor-pointer"

  return (
    <div
      className={
        active
          ? `text-white bg-black border-black ${defaultClassName}`
          : defaultClassName
      }
      onClick={onClick}
    >
      {name}
    </div>
  )
}

TemplateOption.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default TemplateOption
