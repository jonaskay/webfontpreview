import React, { useRef } from "react"
import PropTypes from "prop-types"

import toggleStyles from "./toggle.module.css"

const Toggle = ({ open, onClick }) => {
  const textElement = useRef(null)

  return (
    <div
      className="flex flex-none items-center h-auto rounded-bl pl-2 py-1 bg-gray-900 text-center text-white cursor-pointer lg:hidden"
      onClick={onClick}
    >
      <div className="font-serif font-bold text-xl pr-2">A</div>
      <div
        ref={textElement}
        className={`pr-2 ${toggleStyles.transition}`}
        style={{ marginRight: open ? -textElement.current.clientWidth : 0 }}
      >
        Change font
      </div>
    </div>
  )
}

Toggle.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default Toggle
