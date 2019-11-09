const REGULAR = "regular"
const ITALIC = "italic"

export const getFontWeight = variant => {
  if (variant === REGULAR || variant === ITALIC) {
    return 400
  }

  return parseInt(variant, 10)
}

export const getFontStyle = variant => {
  if (variant === REGULAR) {
    return "normal"
  }

  return variant.toString().includes(ITALIC) ? ITALIC : "normal"
}
