import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet, HelmetProvider } from "react-helmet-async"
import "bulma/css/bulma.min.css"
import "../styles/app.css"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMdx.edges
    const pathname = typeof window !== "undefined" ? window.location.href : ""
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return (
      <section className="section">
        <HelmetProvider>
          <Helmet defer={false}>
            <title>Blog - Movies and Web Series</title>
            <meta
              name="description"
              content="My Currently Watching and Favourite Movies and Web Series."
            />
            <meta property="og:title" content="Blog - Movies and Web Series" />
            <meta
              property="og:site_name"
              content="Blog - Movies and Web Series"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:description"
              content="My Currently Watching and Favourite Movies and Web Series."
            />
            <meta
              property="og:image"
              content="https://sanmovies.netlify.app/sanmovies-cover.png"
            />
            <meta
              property="article:publisher"
              content="https://www.facebook.com/santhoshveercom"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Blog - Movies and Web Series" />
            <meta
              name="twitter:description"
              content="My Currently Watching and Favourite Movies and Web Series."
            />
            <meta
              name="twitter:image"
              content="https://sanmovies.netlify.app/sanmovies-cover.png"
            />
            <meta name="twitter:site" content="@santhoshveerece" />
            <link rel="canonical" href={pathname} />
            <meta name="twitter:url" content={pathname} />
            <meta property="og:url" content={pathname} />
          </Helmet>
        </HelmetProvider>
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-half">
              <br />
              <h1 className="title is-4 has-text-warning has-text-centered">
                Blog{" "}
                <span role="img" aria-label="Growing Heart">
                  📕
                </span>
              </h1>
              <p className="has-text-centered">
                Movies and Web Series I watched and Completed.
              </p>
              <br />
              <ul>
                {posts.map(({ node }) => (
                  <li key={node.frontmatter.title} className="title is-5">
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </li>
                ))}
              </ul>
              <br />
              {!isFirst && (
                <Link
                  style={{ margin: "20px" }}
                  to={`../${prevPage}`}
                  rel="prev"
                >
                  <span role="img" aria-label="Growing Heart">
                    ◀
                  </span>{" "}
                  Previous
                </Link>
              )}
              {!isLast && (
                <Link
                  style={{ margin: "20px" }}
                  to={`/posts/${nextPage}`}
                  rel="next"
                >
                  <span role="img" aria-label="Growing Heart">
                    ▶
                  </span>{" "}
                  Next
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
