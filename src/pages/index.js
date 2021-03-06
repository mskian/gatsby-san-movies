import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet, HelmetProvider } from "react-helmet-async"

const Blogindex = ({ data }) => {
  const pathname = typeof window !== "undefined" ? window.location.href : ""
  return (
    <section className="section">
      <HelmetProvider>
        <Helmet>
          <title>{`${data.site.siteMetadata.title}`}</title>
          <meta
            name="description"
            content={`${data.site.siteMetadata.description}`}
          />
          <meta
            property="og:title"
            content={`${data.site.siteMetadata.title}`}
          />
          <meta
            property="og:site_name"
            content={`${data.site.siteMetadata.title}`}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`${data.site.siteMetadata.description}`}
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
          <meta
            name="twitter:title"
            content={`${data.site.siteMetadata.title}`}
          />
          <meta
            name="twitter:description"
            content={`${data.site.siteMetadata.description}`}
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
            <br />
            <h1 className="title is-4 has-text-warning has-text-centered">
              Movies and Series{" "}
              <span role="img" aria-label="Growing Heart">
                ????
              </span>
            </h1>
            <div className="subscribe-form">
              <p className="has-text-dark has-text-weight-medium has-text-centered">
                Check Out My Lists{" "}
                <span role="img" aria-label="robot">
                  ????
                </span>{" "}
                - Currently watched and Completed Movies and Web Series.{" "}
                <span role="img" aria-label="heart">
                  ????
                </span>
              </p>
              <Link
                to="/posts"
                className="button-link"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <span>??? Open Blog</span>
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogindex

export const query = graphql`
  query SITE_INDEX_QUERY {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          description
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
