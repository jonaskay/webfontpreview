import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Article from "../components/article"
import Settings from "../components/settings"

const PreviewPage = () => {
  const [headingFamily, setHeadingFamily] = useState(null)
  const [bodyFamily, setBodyFamily] = useState(null)

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
      <div className="p-4">
        <Link
          to="/"
          className="text-xl text-gray-600 hover:text-black font-bold"
        >
          Web Font Preview
        </Link>
      </div>
      <main className="p-16 max-w-3xl">
        <Article headingFamily={headingFamily} bodyFamily={bodyFamily} />
      </main>
      <div className="fixed top-0 bottom-0 right-0">
        <Settings options={options} />
      </div>
    </>
  )
}

export default PreviewPage
