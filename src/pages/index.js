import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Template from "../components/template"
import { defaultHeadingFamily, defaultBodyFamily } from "../variables"

const IndexPage = () => {
  const [headingFamily, setHeadingFamily] = useState(defaultHeadingFamily)
  const [bodyFamily, setBodyFamily] = useState(defaultBodyFamily)
  const templates = {
    article: "Article",
    hero: "Hero",
  }

  return (
    <Layout
      headingFamily={headingFamily}
      bodyFamily={bodyFamily}
      onHeadingFamilyChange={family => setHeadingFamily(family)}
      onBodyFamilyChange={family => setBodyFamily(family)}
    >
      <SEO title="Preview Google Fonts" />
      <div className="p-6 md:p-16">
        <h1 className="text-4xl mb-3" style={{ fontFamily: headingFamily }}>
          Preview Google Fonts on a real website.
        </h1>
        <p
          className="text-2xl max-w-md mb-5"
          style={{ fontFamily: bodyFamily }}
        >
          Choose and pair typefaces using a site template instead of type
          specimens.
        </p>
        <p className="mb-2">To continue, select a template:</p>
        {Object.keys(templates).map(template => (
          <Template
            key={template}
            name={templates[template]}
            value={template}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
