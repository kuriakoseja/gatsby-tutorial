import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      title
      description
      price
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
export default function({ data }) {
  console.log(data)
  const { title, price } = data.contentfulProduct
  const { description } = data.contentfulProduct
  const { fluid } = data.contentfulProduct.image

  return (
    <Layout>
      <h1 className="lg-font-size-20-px">Know your products</h1>
      <div className="lg-border-1-px blackEight-border-color"></div>
      <div className="spacer-20"></div>
      <div className="displayFlex justifyContentSpaceBetween alignItemsCenter">
        <h1 className="font-700-weight ma-b-0-em ma-t-0-em">{title}</h1>
        <p className="lg-font-size-29-px pa-b-1-em pa-l-1-em pa-r-1-em pa-t-1-em white-color font-800-weight border-radius-100-px red-background">${price}</p>
      </div>
      <div className="spacer-20"></div>
      <Img fluid={fluid} />
      <p className="ma-t-1-em lg-font-size-18-px font-700-weight">
        {description}
      </p>
      <Link to="/products/">
        <h2>Back to Products</h2>
      </Link>
    </Layout>
  )
}
