import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'


export default function images({ data }) {
     // stop code before array
    const images = data.allFile.edges    
    return (
        <Layout>
           {
               images.map(({node},index) => {
                   return <h3 className="m-font-size-12-px">{node.relativePath}</h3>
               })
           }
        </Layout>
    )
}

export const query = graphql`
{
    allFile{
      edges{
        node{
          relativePath
        }
      }
    }
  }
`