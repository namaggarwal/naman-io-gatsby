/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const OuterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
  flex-grow: 1;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  text-align: center;
  margin-bottom: 1rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
        </Content>
        <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
            &nbsp;|&nbsp;Theme By{` `}
            <GatsbyLink href="https://github.com/niklasmtj/gatsby-theme-julia">@niklasmtj</GatsbyLink>
        </Footer>
      </OuterContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
