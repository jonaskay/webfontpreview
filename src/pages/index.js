import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { defaultHeadingFamily, defaultBodyFamily } from "../variables"

const IndexPage = () => {
  const [headingFamily, setHeadingFamily] = useState(defaultHeadingFamily)
  const [bodyFamily, setBodyFamily] = useState(defaultBodyFamily)

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
        <Link
          to="/preview"
          className="border border-gray-700 hover:border-gray-900 py-1 px-2 rounded-full"
        >
          Article
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
