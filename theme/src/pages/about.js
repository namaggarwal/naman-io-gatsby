import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"


const Content = styled.div`
  margin-top: 2rem;
`

const ExternalLink = styled.a`
  color: #2867B2;
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-weight: bold;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`naman`, `aggarwal`, `javascript`, `golang`, `aws`, `android`, `google`, `appscript`]} />
    <Content>
      <p>I am a Software Engineer at Facebook in London. I have a strong interest in architecting and building highly scalable distributed applications. I also work on a lot of freelance projects including but not restricted to automating GSuite using Google App Script.</p>
      <p>Before Facebook, I have held technical leadership positions at Grab, Mastercard and Visa in Singapore. You can view my <ExternalLink href="https://www.linkedin.com/in/namanaggarwal/">LinkedIn</ExternalLink> for more information.</p>
    </Content>
  </Layout>
)

export default AboutPage
