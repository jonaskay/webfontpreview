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

const PreviewPage = ({ location }) => {
  const [headingFamily, setHeadingFamily] = useState(null)
  const [bodyFamily, setBodyFamily] = useState(null)
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

  const handleTemplateSelect = key => setTemplate(key)

  const TemplateComponent = template && templates[template].component

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
          {TemplateComponent && (
            <TemplateComponent
              headingFamily={headingFamily}
              bodyFamily={bodyFamily}
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
