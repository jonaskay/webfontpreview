import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

const Share = ({ url }) => {
  const [copied, setCopied] = useState(false)
  const inputElement = useRef(null)

  useEffect(() => {
    setCopied(false)
  }, [url])

  const handleClick = () => {
    if (typeof document !== "undefined") {
      inputElement.current.select()
      document.execCommand("copy")
      setCopied(true)
    }
  }

  return (
    <>
      <div className="mt-2 mb-1 relative">
        <input
          ref={inputElement}
          className="whitespace-no-wrap overflow-x-scroll border px-1 text-sm w-full"
          type="text"
          value={url}
          readOnly
        />
        <div
          className="absolute top-0 right-0 flex items-center h-full border px-1 bg-gray-100 text-sm text-gray-700 hover:text-black cursor-pointer"
          onClick={handleClick}
        >
          copy
        </div>
      </div>
      {copied && <div className="text-sm text-gray-600">URL copied!</div>}
    </>
  )
}

Share.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Share
