import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="w-full h-16 p-4 flex items-center">
      <h4 className="text-gray-600 font-bold text-xl">
        {data.site.siteMetadata.title}
      </h4>
    </header>
  )
}

export default Header
