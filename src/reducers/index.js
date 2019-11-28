import { combineReducers } from "redux"

import createFontReducer from "./font-reducer"
import sidebarReducer from "./sidebar-reducer"
import {
  defaultBodyFamily,
  defaultBodyVariants,
  defaultHeadingFamily,
  defaultHeadingVariants,
} from "../variables"

export default combineReducers({
  bodyFont: createFontReducer("BODY", defaultBodyFamily, defaultBodyVariants),
  headingFont: createFontReducer(
    "HEADING",
    defaultHeadingFamily,
    defaultHeadingVariants
  ),
  sidebar: sidebarReducer,
})
