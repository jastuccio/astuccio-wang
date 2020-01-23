import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


class Footer extends React.Component {
  render() {
     return (
      <FooterWrap>
        <Link to="/blog/uncopyright/">Uncopyright{` `}</Link>2019 - {new Date().getFullYear()}, Built with{` `}<a href="https://www.gatsbyjs.org">Gatsby</a>

        Github linkedin Resume Dev.to
      </FooterWrap>
     )
  }
}

export default Footer


const FooterWrap = styled.footer`
  text-align: center;
  margin: 24px;
`