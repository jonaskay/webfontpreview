import React from "react"
import PropTypes from "prop-types"

import TextOption from "./text-option"
import TemplateOption from "../components/template-option"
import Share from "../components/share"
import Github from "./github"
import templates from "../templates"
import toolbarStyles from "./toolbar.module.css"

const Toolbar = ({
  show,
  shareable,
  url,
  options,
  selectedText,
  onSelectText,
  selectedTemplate,
  onSelectTemplate,
}) => {
  const renderOption = option => {
    const { name } = option

    return (
      <TextOption
        key={name}
        title={name}
        value={option.value}
        active={name === selectedText}
        disabled={selectedText && name !== selectedText}
        onClick={() => onSelectText(name)}
      />
    )
  }

  const defaultClassName = `flex-none relative w-64 md:w-56 h-full border-l lg:mr-0 bg-white ${toolbarStyles.transition}`

  return (
    <div
      className={
        show
          ? `${defaultClassName} mr-0`
          : `${defaultClassName} -mr-64 md:-mr-56`
      }
    >
      {options.map(option => renderOption(option))}
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

export default Toolbar
