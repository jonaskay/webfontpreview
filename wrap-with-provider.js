import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import reducer from "./src/reducers"

export default ({ element }) => {
  const store = createStore(reducer)
  return <Provider store={store}>{element}</Provider>
}
