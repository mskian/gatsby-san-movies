import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import "bulma/css/bulma.min.css"
import "../styles/app.css"

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        description
        date(formatString: "YYYY MMMM Do")
        categories
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const { frontmatter, body } = data.mdx
  const pathname = typeof window !== "undefined" ? window.location.href : ""
  return (
    <section className="section">
      <HelmetProvider>
        <Helmet defer={false}>
          <title>{`${frontmatter.title}`}</title>
          <meta name="description" content={`${frontmatter.description}`} />
          <meta property="og:title" content={`${frontmatter.title}`} />
          <meta property="og:site_name" content={`${frontmatter.title}`} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`${frontmatter.description}`}
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
          <meta name="twitter:title" content={`${frontmatter.title}`} />
          <meta
            name="twitter:description"
            content={`${frontmatter.description}`}
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
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <br />
            <h1>{frontmatter.title}</h1>
            <hr />
            <p className="post-date">Updated at: {frontmatter.date}</p>
            <br />
            <MDXRenderer>{body}</MDXRenderer>
            <br />
            <p className="post-tags">
              Category :{" "}
              <Link
                to={`/category/${frontmatter.categories}`
                  .toLowerCase()
                  .split(" ")
                  .join("-")}
              >
                {frontmatter.categories}
              </Link>
            </p>
            <br />
            <Link to="/posts">Back to Blog</Link>
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPost
