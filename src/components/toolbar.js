import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import FontConfig from "./font-config"
import TemplateOption from "./template-option"
import Share from "./share"
import Github from "./github"
import templates from "../templates"
import toolbarStyles from "./toolbar.module.css"

const Toolbar = ({
  show,
  shareable,
  url,
  onSelectText,
  selectedTemplate,
  onSelectTemplate,
  headingFamily,
  headingVariant,
  headingVariants,
  onHeadingVariantSelect,
  bodyFamily,
  bodyVariant,
  bodyVariants,
  onBodyVariantSelect,
}) => {
  const defaultClassName = `flex-none relative w-64 md:w-56 h-full border-l lg:mr-0 bg-white ${toolbarStyles.transition}`

  return (
    <div
      className={
        show
          ? `${defaultClassName} mr-0`
          : `${defaultClassName} -mr-64 md:-mr-56`
      }
    >
      <FontConfig
        title="Heading"
        family={headingFamily}
        onFamilyClick={() => onSelectText("Heading")}
        variant={headingVariant}
        variants={headingVariants}
        onVariantSelect={onHeadingVariantSelect}
      />
      <FontConfig
        title="Body"
        family={bodyFamily}
        onFamilyClick={() => onSelectText("Body")}
        variant={bodyVariant}
        variants={bodyVariants}
        onVariantSelect={onBodyVariantSelect}
      />
      <div className="p-4">
        <h4>Template</h4>
        {Object.keys(templates).map(template => (
          <TemplateOption
            key={templates[template].name}
            name={templates[template].name}
            active={template === selectedTemplate}
            onClick={() => onSelectTemplate(template)}
          />
        ))}
      </div>
      {shareable && (
        <div className="p-4">
          <h4>Share</h4>
          <Share url={url} />
        </div>
      )}
      <div className="absolute bottom-0 right-0 w-6 m-3">
        <Github />
      </div>
    </div>
  )
}

Toolbar.propTypes = {
  show: PropTypes.bool.isRequired,
  shareable: PropTypes.bool,
  url: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    })
  ),
  selectedText: PropTypes.string,
  onSelectText: PropTypes.func.isRequired,
  selectedTemplate: PropTypes.string,
  onSelectTemplate: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  headingFamily: state.headingFont.family,
  headingVariant: state.headingFont.variant,
  headingVariants: state.headingFont.variants,
  bodyFamily: state.bodyFont.family,
  bodyVariant: state.bodyFont.variant,
  bodyVariants: state.bodyFont.variants,
})

const mapDispatchToProps = dispatch => ({
  onHeadingVariantSelect: variant =>
    dispatch({
      type: "SELECT_HEADING_VARIANT",
      variant,
    }),
  onBodyVariantSelect: variant =>
    dispatch({
      type: "SELECT_BODY_VARIANT",
      variant,
    }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar)
