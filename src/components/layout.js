import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

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

  const handleTemplateSelect = template => {
    navigate("/preview", { state: { template } })
  }

  return (
    <>
      <Header />
      <main className="lg:max-w-2xl xl:max-w-full">{children}</main>
      <Settings options={options} onSelectTemplate={handleTemplateSelect} />
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
