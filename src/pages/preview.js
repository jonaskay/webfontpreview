import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import axios from "axios"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Settings from "../components/settings"
import previewStyles from "./preview.module.css"
import templates from "../templates"
import { getFontWeight, getFontStyle } from "../utilities/font-variant-parser"
import { selectHeadingFont, selectBodyFont } from "../actions"

const HEADING = "heading"
const BODY = "body"
const TEMPLATE = "template"

const PreviewPage = ({
  location,
  onHeadingFontChange,
  headingFamily,
  headingVariant,
  onBodyFontChange,
  bodyFamily,
  bodyVariant,
}) => {
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
    if (headingParam || bodyParam) {
      ;(async () => {
        const result = await axios(
          `https://www.googleapis.com/webfonts/v1/webfonts`,
          {
            params: {
              key: process.env.GATSBY_GOOGLE_API_KEY,
            },
          }
        )

        const {
          data: { items },
        } = result

        if (headingParam) {
          const variants = items.find(item => item.family === headingParam)
            .variants
          onHeadingFontChange(headingParam, variants)
        }
        if (bodyParam) {
          const variants = items.find(item => item.family === bodyParam)
            .variants
          onBodyFontChange(bodyParam, variants)
        }
      })()
    }
  }, [])

  const handleTemplateSelect = key => setTemplate(key)

  const headingFontWeight = getFontWeight(headingVariant)
  const headingFontStyle = getFontStyle(headingVariant)
  const bodyFontWeight = getFontWeight(bodyVariant)
  const bodyFontStyle = getFontStyle(bodyVariant)

  const TemplateComponent = template && templates[template].component

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
          selectedTemplate={template}
          onSelectTemplate={handleTemplateSelect}
          shareable
        />
      )}
    </>
  )
}

PreviewPage.propTypes = {
  location: PropTypes.object.isRequired,
  onHeadingFontChange: PropTypes.func.isRequired,
  headingFamily: PropTypes.string.isRequired,
  headingVariant: PropTypes.string.isRequired,
  onBodyFontChange: PropTypes.func.isRequired,
  bodyFamily: PropTypes.string.isRequired,
  bodyVariant: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  headingFamily: state.headingFont.family,
  headingVariant: state.headingFont.variant,
  bodyFamily: state.bodyFont.family,
  bodyVariant: state.bodyFont.variant,
})

const mapDispatchToProps = dispatch => ({
  onHeadingFontChange: (family, variants) =>
    dispatch(selectHeadingFont(family, variants)),
  onBodyFontChange: (family, variants) =>
    dispatch(selectBodyFont(family, variants)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewPage)
