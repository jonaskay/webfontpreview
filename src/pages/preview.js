import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Settings from "../components/settings"
import previewStyles from "./preview.module.css"
import templates from "../templates"
import {
  defaultHeadingFamily,
  defaultHeadingVariants,
  defaultBodyFamily,
  defaultBodyVariants,
  defaultVariant,
} from "../variables"
import { getFontWeight, getFontStyle } from "../utilities/font-variant-parser"

const HEADING = "heading"
const BODY = "body"
const TEMPLATE = "template"

const PreviewPage = ({ location }) => {
  const [headingFamily, setHeadingFamily] = useState(null)
  const [headingVariant, setHeadingVariant] = useState(defaultVariant)
  const [headingVariants, setHeadingVariants] = useState(defaultHeadingVariants)
  const [bodyFamily, setBodyFamily] = useState(null)
  const [bodyVariant, setBodyVariant] = useState(defaultVariant)
  const [bodyVariants, setBodyVariants] = useState(defaultBodyVariants)
  const [template, setTemplate] = useState(null)

  useEffect(() => {
    const url = new URL(location.href)
    if (location.state && location.state.template) {
      setTemplate(location.state.template)
    } else {
      const templateParam = url.searchParams.get(TEMPLATE)
      setTemplate(templateParam || Object.keys(templates)[0])
    }

    const headingParam = url.searchParams.get(HEADING)
    const bodyParam = url.searchParams.get(BODY)
    setHeadingFamily(headingParam || defaultHeadingFamily)
    setBodyFamily(bodyParam || defaultBodyFamily)
  }, [])

  const handleHeadingFamilyChange = (family, variants) => {
    setHeadingFamily(family)
    setHeadingVariants(variants)
  }

  const handleHeadingVariantChange = variant => setHeadingVariant(variant)

  const handleBodyFamilyChange = (family, variants) => {
    setBodyFamily(family)
    setBodyVariants(variants)
  }

  const handleBodyVariantChange = variant => {
    setBodyVariant(variant)
  }

  const handleTemplateSelect = key => setTemplate(key)

  const headingFontWeight = getFontWeight(headingVariant)
  const headingFontStyle = getFontStyle(headingVariant)
  const bodyFontWeight = getFontWeight(bodyVariant)
  const bodyFontStyle = getFontStyle(bodyVariant)

  const TemplateComponent = template && templates[template].component

  const options = [
    {
      name: "Heading",
      value: headingFamily,
      onChange: handleHeadingFamilyChange,
      variant: headingVariant,
      onVariantChange: handleHeadingVariantChange,
      variants: headingVariants,
    },
    {
      name: "Body",
      value: bodyFamily,
      onChange: handleBodyFamilyChange,
      variant: bodyVariant,
      onVariantChange: handleBodyVariantChange,
      variants: bodyVariants,
    },
  ]

  return (
    <>
      <SEO title="Preview Google Fonts" />
      <div className={previewStyles.background}>
        <h4 className="p-4">
          <Link to="/" className="text-gray-600 hover:text-black font-bold">
            Web Font Preview
          </Link>
        </h4>
        <main className="overflow-x-scroll">
          {TemplateComponent && (
            <TemplateComponent
              headingFamily={headingFamily}
              headingFontStyle={headingFontStyle}
              headingFontWeight={headingFontWeight}
              bodyFamily={bodyFamily}
              bodyFontStyle={bodyFontStyle}
              bodyFontWeight={bodyFontWeight}
            />
          )}
        </main>
      </div>
      {headingFamily && bodyFamily && template && (
        <Settings
          url={encodeURI(
            `https://webfontpreview.com/preview?${HEADING}=${headingFamily}&${BODY}=${bodyFamily}&${TEMPLATE}=${template}`
          )}
          options={options}
          selectedTemplate={template}
          onSelectTemplate={handleTemplateSelect}
          shareable
        />
      )}
    </>
  )
}

export default PreviewPage
