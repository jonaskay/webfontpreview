import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Template from "../components/template"
import templates from "../templates"
import {
  defaultHeadingFamily,
  defaultHeadingVariants,
  defaultBodyFamily,
  defaultBodyVariants,
  defaultVariant,
} from "../variables"
import { getFontWeight, getFontStyle } from "../utilities/font-variant-parser"

const IndexPage = () => {
  const [headingFamily, setHeadingFamily] = useState(defaultHeadingFamily)
  const [headingVariant, setHeadingVariant] = useState(defaultVariant)
  const [headingVariants, setHeadingVariants] = useState(defaultHeadingVariants)
  const [bodyFamily, setBodyFamily] = useState(defaultBodyFamily)
  const [bodyVariant, setBodyVariant] = useState(defaultVariant)
  const [bodyVariants, setBodyVariants] = useState(defaultBodyVariants)

  const handleHeadingFamilyChange = (family, variants) => {
    setHeadingFamily(family)
    setHeadingVariants(variants)
  }

  const handleBodyFamilyChange = (family, variants) => {
    setBodyFamily(family)
    setBodyVariants(variants)
  }

  const headingFontWeight = getFontWeight(headingVariant)
  const headingFontStyle = getFontStyle(headingVariant)
  const bodyFontWeight = getFontWeight(bodyVariant)
  const bodyFontStyle = getFontStyle(bodyVariant)

  return (
    <Layout
      headingFamily={headingFamily}
      headingVariant={headingVariant}
      headingVariants={headingVariants}
      bodyFamily={bodyFamily}
      bodyVariant={bodyVariant}
      bodyVariants={bodyVariants}
      onHeadingFamilyChange={handleHeadingFamilyChange}
      onHeadingVariantChange={variant => setHeadingVariant(variant)}
      onBodyFamilyChange={handleBodyFamilyChange}
      onBodyVariantChange={variant => setBodyVariant(variant)}
    >
      <SEO title="Preview Google Fonts" />
      <div className="p-6 md:p-16">
        <h1
          className="text-4xl mb-3"
          style={{
            fontFamily: headingFamily,
            fontStyle: headingFontStyle,
            fontWeight: headingFontWeight,
          }}
        >
          Preview Google Fonts on a real website.
        </h1>
        <p
          className="text-2xl max-w-md mb-5"
          style={{
            fontFamily: bodyFamily,
            fontStyle: bodyFontStyle,
            fontWeight: bodyFontWeight,
          }}
        >
          Choose and pair typefaces using a site template instead of type
          specimens.
        </p>
        <p className="mb-2">To continue, select a template:</p>
        {Object.keys(templates).map(template => (
          <Template
            key={templates[template].name}
            name={templates[template].name}
            value={template}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
