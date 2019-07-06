import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Settings from "./settings"
import "./layout.css"

const Layout = ({
  children,
  headingFamily,
  bodyFamily,
  onHeadingFamilyChange,
  onBodyFamilyChange,
}) => {
  const options = [
    { name: "Heading", value: headingFamily, onChange: onHeadingFamilyChange },
    { name: "Body", value: bodyFamily, onChange: onBodyFamilyChange },
  ]

  return (
    <>
      <Header />
      <main>{children}</main>
      <div className="fixed top-0 bottom-0 right-0 pt-16">
        <Settings options={options} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headingFamily: PropTypes.string,
  bodyFamily: PropTypes.string,
  onHeadingFamilyChange: PropTypes.func.isRequired,
  onBodyFamilyChange: PropTypes.func.isRequired,
}

export default Layout
