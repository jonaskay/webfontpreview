import { defaultVariant } from "../variables"

const createFontReducer = (group, initialFamily, initialVariants) => (
  state = {
    family: initialFamily,
    variant: defaultVariant,
    variants: initialVariants,
  },
  action
) => {
  switch (action.type) {
    case `SELECT_${group}_FONT`:
      return {
        ...state,
        family: action.family,
        variant: defaultVariant,
        variants: action.variants,
      }
    case `SELECT_${group}_VARIANT`:
      return {
        ...state,
        variant: action.variant,
      }
    default:
      return state
  }
}

export default createFontReducer
