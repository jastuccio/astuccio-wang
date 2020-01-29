/**
 * Social Icon Links for Bio component
 *
 */

import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

import Github from "../../content/assets/icons/github.icon.svg"
import Freecodecamp from "../../content/assets/icons/freecodecamp.icon.svg"
import Twitter from "../../content/assets/icons/twitter.icon.svg"
import StackOverflow from "../../content/assets/icons/stackoverflow.icon.svg"


function BioSocialIcons() {
  return (
    <>
    <Row>
    <Alink href="https://github.com/jastuccio" tabindex="1">
      <DivIcon>
        <Github />
      </DivIcon>
    </Alink>

      <Alink href="https://www.freecodecamp.org/forum/u/jastuccio" tabindex="2">
        <DivIcon>
          <Freecodecamp />
        </DivIcon>
      </Alink>

      <a href="https://twitter.com/JAstuccio" tabindex="3">
        <DivIcon>
          <Twitter />
        </DivIcon>
      </a>

      <a href="https://stackoverflow.com/users/1769594/jastuccio" tabindex="4">
        <DivIcon>
          <StackOverflow />
        </DivIcon>
      </a>
    </Row>
  </>
  )
}

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
  text-decoration: none;
  text-decoration-style: none;
`
const Alink = styled.a`
  text-decoration: none;
`

const DivIcon = styled.div`
  height: 2rem;
  width: 2rem;

`

export default BioSocialIcons
