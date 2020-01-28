import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Hi.{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>I'm Joe Astuccio. Web developer, sailor, stargazer, hockey player, and all around fun guy... but my absolute favorite thing is being a dad.</p>

        <p>I build interesting things using React, Gatsby, Svelte, JavaScript, HTML, CSS, Styled Components, SCSS, and more. Thank you for visiting.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

// --------



//     return (
//

//         <Bio />
//         <div style={{ margin: "20px 0 40px" }}>
//           {posts.map(({ node }) => {
//             const title = node.frontmatter.title || node.fields.slug
//             return (
//               <div key={node.fields.slug}>
//                 <h3
//                   style={{
//                     marginBottom: rhythm(1 / 4),
//                   }}
//                 >
//                   <Link
//                     style={{ boxShadow: `none` }}
//                     to={`blog${node.fields.slug}`}
//                   >
//                     {title}
//                   </Link>
//                 </h3>
//                 <small>{node.frontmatter.date}</small>
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: node.frontmatter.description || node.excerpt,
//                   }}
//                 />
//               </div>
//             )
//           })}
//         </div>
//         <Link to="/">
//           <Button marginTop="85px">Go Home</Button>
//         </Link>
//       </Layout>
//     )
//   }
// }







// -------------------------------------
// ---------------------------------------

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
