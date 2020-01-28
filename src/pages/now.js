import React from "react"
// import { Link, graphql } from "gatsby"
import { Link } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"
import Button from "../components/button"

class Now extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Now" />
        {/* <Bio /> */}
        <div style={{ margin: "20px 0 40px" }}>
          <ul>
            <li>Project Manager for the bostonjs.com website refresh</li>
            <li>Co-organizing <a href="https://www.meetup.com/JAMstack-Boston/">the JAMstack Boston Meetup</a></li>

            {/* {/* Emojis should be wrapped in <span>, have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji */}


            <li>Father to a basketball crazed middle schooler <span role="img">  🏀 ❤️ 😁</span></li>
          </ul>
          <p>inspired by Derek Sivers and <a href="https://nownownow.com/about">the Now page movement.</a></p>

        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Now

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`