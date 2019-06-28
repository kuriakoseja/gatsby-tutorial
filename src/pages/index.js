import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import { Button } from '../components/Button'
import { FaMeteor } from 'react-icons/fa'
import Info from '../components/info'
import Dude from '../components/dude'

export const query = graphql`
	 {
    site{
      siteMetadata {
        title
        keywords
        description
      }
    }
  }

`
const IndexPage = ({ data }) => (

  <Layout>
    <Helmet title={data.site.siteMetadata.title} 
      meta={[
        { name: 'description', content: (data.site.siteMetadata.description)},
        { name: 'keywords', content: (data.site.siteMetadata.keywords)},
      ]}
    />
  <Link to = "/products/" >
    <h1>Products Page</h1>
    </Link >
  <Dude />
  <Info />
  <Link to="/images/">Images page</Link>
  <h1 className="m-font-size-12-px">Hi people</h1>
  <p>Welcome to your new Gatsby site.</p>
  <p>Now go build something great.</p>
  <div className="spacer-20"></div>
  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>


    <Image />
  </div>
  <div className="spacer-20"></div>
  <div className="displayFlex flexFlowColumn">
    <FaMeteor className="m-font-size-80-px ma-b-10-px pink-color" />
    <Link to="/404/">
      <Button className="lg-width-800-px ma-b-10-px">
        i'm from styled
    </Button>
    </Link>
    <div className="spacer-20"></div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link className="blue-color font-500-weight" to="/products/test">Go to Test Page</Link>
    <div className="spacer-20"></div>

  </div>
  </Layout >
)

export default IndexPage
