import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

import Header from "./header"
import Settings from "./settings"
import "./layout.css"

const Layout = ({ children }) => {
  const handleTemplateSelect = template => {
    navigate("/preview", { state: { template } })
  }

  return (
    <>
      <Header />
      <main className="lg:max-w-2xl xl:max-w-full">{children}</main>
      <Settings onSelectTemplate={handleTemplateSelect} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
