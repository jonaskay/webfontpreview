import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

import Header from "./header"
import Settings from "./settings"
import "./layout.css"

const Layout = ({
  children,
  headingFamily,
  headingVariant,
  headingVariants,
  bodyFamily,
  bodyVariant,
  bodyVariants,
  onHeadingFamilyChange,
  onHeadingVariantChange,
  onBodyFamilyChange,
  onBodyVariantChange,
}) => {
  const options = [
    {
      name: "Heading",
      value: headingFamily,
      onChange: onHeadingFamilyChange,
      variant: headingVariant,
      onVariantChange: onHeadingVariantChange,
      variants: headingVariants,
    },
    {
      name: "Body",
      value: bodyFamily,
      onChange: onBodyFamilyChange,
      variant: bodyVariant,
      onVariantChange: onBodyVariantChange,
      variants: bodyVariants,
    },
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
  onHeadingFamilyChange: PropTypes.func.isRequired,
  headingVariant: PropTypes.string,
  onHeadingVariantChange: PropTypes.func.isRequired,
  bodyFamily: PropTypes.string,
  onBodyFamilyChange: PropTypes.func.isRequired,
  bodyVariant: PropTypes.string,
  onBodyVariantChange: PropTypes.func.isRequired,
}

export default Layout
