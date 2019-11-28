export const SELECT_HEADING_FONT = "SELECT_HEADING_FONT"
export const SELECT_BODY_FONT = "SELECT_BODY_FONT"
export const SELECT_SIDEBAR = "SELECT_SIDEBAR"

export const selectHeadingFont = (family, variants) => ({
  type: SELECT_HEADING_FONT,
  family,
  variants,
})

export const selectBodyFont = (family, variants) => ({
  type: SELECT_BODY_FONT,
  family,
  variants,
})

export const selectSidebar = sidebar => ({
  type: SELECT_SIDEBAR,
  sidebar,
})
