const sidebarReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_SIDEBAR":
      const { sidebar } = action
      if (sidebar === state) {
        return null
      }
      return action.sidebar
    default:
      return state
  }
}

export default sidebarReducer
