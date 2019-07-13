import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Article from "../components/article"
import Settings from "../components/settings"
import previewStyles from "./preview.module.css"
import { defaultHeadingFamily, defaultBodyFamily } from "../variables"

const PreviewPage = ({ location }) => {
  const [headingFamily, setHeadingFamily] = useState(defaultHeadingFamily)
  const [bodyFamily, setBodyFamily] = useState(defaultBodyFamily)

  const templates = {
    article: Article,
  }

  let TemplateComponent
  if (location.state && location.state.template) {
    TemplateComponent = templates[location.state.template]
  } else {
    TemplateComponent = Article
  }

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
      <div className="p-4">
          <Link to="/" className="text-gray-600 hover:text-black font-bold">
          Web Font Preview
        </Link>
      </div>
        <main className="overflow-x-scroll">
        <TemplateComponent
          headingFamily={headingFamily}
          bodyFamily={bodyFamily}
        />
      </main>
      </div>
      <Settings options={options} />
    </>
  )
}

export default PreviewPage
