import React from 'react'
import Layout from '../components/layout';
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
{
	products: allContentfulProduct{
    edges{
      node{
        id
        title
        description
        price
        image {
          fluid{
            ... GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
} 
`
export default function products({data}) {
  return (
    <Layout>
        <Link to="/">Go back to Home page</Link>
        <h1>
            Our Products
        </h1>
        {
            data.products.edges.map(({node:product})=>{
                return (
                    <div>
                        <Img fluid={product.image.fluid} />
                        <div className="displayFlex justifyContentSpaceBetween">
                            <h3 className="m-font-size-16-px font-800-weight">
                                {product.title}
                            </h3>
                            <h4>
                                ${product.price}
                            </h4>
                        </div>
                        <p>
                            {product.description}
                        </p>
                        <div className="spacer-30" />
                        <Link to={`/products/${product.title}`}>
                          <button className="waves-effect waves-light btn">
                          Click to know more {product.title}
                          </button>
                          
                        </Link>
                        <div></div>
                        
                        <div className="spacer-30" />
                    </div>
                )
            })
        }
    </Layout>
  )
}
