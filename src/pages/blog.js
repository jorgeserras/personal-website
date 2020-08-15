import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Header from "../components/header"

export default function Blog() {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return <>
        <Header />
        <div>Hello world!</div>
        {
            data.allMarkdownRemark.edges.map(edge => {
                return (
                    <Link to={`/blog/${edge.node.fields.slug}`}>
                        <h1>
                            {edge.node.frontmatter.title}
                        </h1>
                        <p>
                            {edge.node.frontmatter.date}
                        </p>
                    </Link>
                )
            })
        }
    </>
}
