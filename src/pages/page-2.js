import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const SecondPage = () => (
  <Layout>
    <SEO title="Test page" description={[`Digital`, ` Council`]} />
    <h1 className="primary-color">Hi from the second page</h1>
    <Banner />
    <div className="contianer">
      <div className="row">
        <div className="col s2">1</div>
        <div className="col s2">2</div>
        <div className="col s2">3</div>
        <div className="col s2">4</div>
        <div className="col s2">5</div>
        <div className="col s2">6</div>
        <div className="col s2">7</div>
        <div className="col s2">8</div>
        <div className="col s2">9</div>
        <div className="col s2">10</div>
        <div className="col s2">11</div>
        <div className="col s2">12</div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
