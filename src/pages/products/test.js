import React from 'react';
import Layout from '../../components/layout';
import {Link} from 'gatsby';

export default function test() {
  return (
    <Layout>
        <h1 className="primary-color">
            Hello from test page 
        </h1>
        <Link to="/">Home page</Link>
    </Layout>
  )
}
