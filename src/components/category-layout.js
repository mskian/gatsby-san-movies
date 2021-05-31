import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet, HelmetProvider } from "react-helmet-async"

const CategoryPage = ({ data, pageContext }) => {
  const pathname = typeof window !== "undefined" ? window.location.href : ""
  return (
    <section className="section">
      <HelmetProvider>
        <Helmet defer={false}>
          <title>{pageContext.category} Page</title>
          <meta
            name="description"
            content="My Currently Watching and Favourite Movies and Web Series."
          />
          <meta property="og:title" content={`${pageContext.category}`} />
          <meta property="og:site_name" content={`${pageContext.category}`} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="My Currently Watching and Favourite Movies and Web Series."
          />
          <meta
            property="og:image"
            content="https://movies.santhoshveer.com/sanmovies-cover.png"
          />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/santhoshveercom"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${pageContext.category}`} />
          <meta
            name="twitter:description"
            content="My Currently Watching and Favourite Movies and Web Series."
          />
          <meta
            name="twitter:image"
            content="https://movies.santhoshveer.com/sanmovies-cover.png"
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
            <h2 className="title is-4 has-text-warning has-text-centered">
              {pageContext.category}
            </h2>
            <p className="has-text-centered">
              There are <b>{data.allMdx.totalCount}</b> posts in the{" "}
              <b>{pageContext.category}</b> category.
            </p>
            <br />
            <ul>
              {data.allMdx.nodes.map(post => (
                <li key={post.id} className="title is-6">
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query CategoryPageQuery($category: String) {
    allMdx(
      filter: { frontmatter: { categories: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
      totalCount
    }
  }
`
