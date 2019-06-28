import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function test2() {
  return (
    <Layout>
        <SEO title="Test 2" description={[`Test1`, `Test2`]}  />
      <h3>
      test 2
        </h3>
    </Layout>
  )
}
