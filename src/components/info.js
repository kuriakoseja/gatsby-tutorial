import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
{
  infos: site {
    siteMetadata {
      title
      info
      description
      author
      keywords
      shows {
        names {
          title
        }
      }
    }
  }
}`



export default function info() {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        const siteData = data.infos.siteMetadata
        console.log(siteData)

        const siteDataOne = data.infos.siteMetadata.shows.names
        console.log(siteDataOne)

        const { title, info, description, author, keywords } = siteData

        return (
          <>
            <h1  className="m-font-size-14-px">{title}</h1>
            <h2  className="m-font-size-14-px">{info}</h2>
            <h3  className="m-font-size-14-px">{description}</h3>
            <h4  className="m-font-size-14-px">{keywords}</h4>
            <div className="spacer-20"></div>
            <h3>Name list</h3>
              {
                siteDataOne.map(item => (
                  <h5>{ item.title }</h5>
                ))
              }
             <br />
          </>
        )
      }}
    />
  )
}
