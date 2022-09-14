import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <>
  <div id="content">Home Page</div>
  <StaticImage
        src="../images/gatsby-icon.png"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
  </>
)


export default IndexPage

export const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}
