import React, { useEffect } from "react"
import PropTypes from "prop-types"

import loadWebFonts from "../utilities/load-web-fonts"

const VariantSelect = ({
  selectedFamily,
  selectedVariant,
  onSelect,
  variants,
}) => {
  useEffect(() => {
    loadWebFonts([`${selectedFamily}:${selectedVariant}`])
  }, [selectedVariant])

  const handleChange = event => onSelect(event.target.value)

  return (
    <>
      <span className="mr-2">Variant</span>
      <select value={selectedVariant} onChange={handleChange}>
        {variants.map(variant => (
          <option key={variant} value={variant}>
            {variant}
          </option>
        ))}
      </select>
    </>
  )
}

VariantSelect.propTypes = {
  selectedFamily: PropTypes.string,
  selectedVariant: PropTypes.string,
  onSelect: PropTypes.func,
  variants: PropTypes.arrayOf(PropTypes.string),
}

VariantSelect.defaultProps = {
  variants: [],
}

export default VariantSelect
