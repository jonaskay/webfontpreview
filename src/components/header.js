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
    <header className="p-4">
      <h4 className="font-bold text-md cursor-pointer">
        {data.site.siteMetadata.title}
      </h4>
    </header>
  )
}

export default Header
