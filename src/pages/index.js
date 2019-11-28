import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Template from "../components/template"
import templates from "../templates"
import { getFontWeight, getFontStyle } from "../utilities/font-variant-parser"

const IndexPage = ({
  headingFamily,
  headingVariant,
  bodyFamily,
  bodyVariant,
}) => {
  const headingFontWeight = getFontWeight(headingVariant)
  const headingFontStyle = getFontStyle(headingVariant)
  const bodyFontWeight = getFontWeight(bodyVariant)
  const bodyFontStyle = getFontStyle(bodyVariant)

  return (
    <Layout>
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

IndexPage.propTypes = {
  headingFamily: PropTypes.string.isRequired,
  headingVariant: PropTypes.string.isRequired,
  bodyFamily: PropTypes.string.isRequired,
  bodyVariant: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  headingFamily: state.headingFont.family,
  headingVariant: state.headingFont.variant,
  bodyFamily: state.bodyFont.family,
  bodyVariant: state.bodyFont.variant,
})

export default connect(mapStateToProps)(IndexPage)
