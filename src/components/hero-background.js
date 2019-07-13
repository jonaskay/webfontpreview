import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "hero-background.jpg" }) {
        childImageSharp {
          fluid(grayscale: true, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Image fluid={data.background.childImageSharp.fluid} />
}
