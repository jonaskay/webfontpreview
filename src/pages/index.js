import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Preview Google Fonts" />
    <div className="p-16">
      <h1 className="text-4xl mb-3">Preview Google Fonts on a real website.</h1>
      <p className="text-2xl max-w-md">
        Choose and pair typefaces using a site template instead of type
        specimens.
      </p>
    </div>
  </Layout>
)

export default IndexPage
