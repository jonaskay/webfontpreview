import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [headingFamily, setHeadingFamily] = useState(null)
  const [bodyFamily, setBodyFamily] = useState(null)

  return (
    <Layout
      headingFamily={headingFamily}
      bodyFamily={bodyFamily}
      onHeadingFamilyChange={family => setHeadingFamily(family)}
      onBodyFamilyChange={family => setBodyFamily(family)}
    >
      <SEO title="Preview Google Fonts" />
      <div className="p-16">
        <h1 className="text-4xl mb-3" style={{ fontFamily: headingFamily }}>
          Preview Google Fonts on a real website.
        </h1>
        <p className="text-2xl max-w-md" style={{ fontFamily: bodyFamily }}>
          Choose and pair typefaces using a site template instead of type
          specimens.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
