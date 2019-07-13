import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Settings from "../components/settings"
import previewStyles from "./preview.module.css"
import templates from "../templates"
import { defaultHeadingFamily, defaultBodyFamily } from "../variables"

const HEADING = "heading"
const BODY = "body"
const TEMPLATE = "template"
const defaultTemplate = Object.keys(templates)[0]

const PreviewPage = ({ location }) => {
  const [headingFamily, setHeadingFamily] = useState(defaultHeadingFamily)
  const [bodyFamily, setBodyFamily] = useState(defaultBodyFamily)
  const [template, setTemplate] = useState(defaultTemplate)

  useEffect(() => {
    if (location.state && location.state.template) {
      setTemplate(location.state.template)
      return
    }

    const url = new URL(location.href)
    if (url) {
      const headingParam = url.searchParams.get(HEADING)
      const bodyParam = url.searchParams.get(BODY)
      const templateParam = url.searchParams.get(TEMPLATE)
      if (headingParam && bodyParam && templateParam) {
        setHeadingFamily(headingParam)
        setBodyFamily(bodyParam)
        setTemplate(templateParam)
      }
    }
  }, [])

  const handleTemplateSelect = key => setTemplate(key)

  const TemplateComponent = templates[template].component

  const options = [
    {
      name: "Heading",
      value: headingFamily,
      onChange: family => setHeadingFamily(family),
    },
    {
      name: "Body",
      value: bodyFamily,
      onChange: family => setBodyFamily(family),
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
          <TemplateComponent
            headingFamily={headingFamily}
            bodyFamily={bodyFamily}
          />
        </main>
      </div>
      <Settings
        url={encodeURI(
          `https://webfontpreview.com/preview?${HEADING}=${headingFamily}&${BODY}=${bodyFamily}&${TEMPLATE}=${template}`
        )}
        options={options}
        selectedTemplate={template}
        onSelectTemplate={handleTemplateSelect}
        shareable
      />
    </>
  )
}

export default PreviewPage
