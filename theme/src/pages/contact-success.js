import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"


const Content = styled.div`
  margin-top: 4rem;
  text-align: center;
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

const ContactSuccessPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`naman`, `aggarwal`, `javascript`, `golang`, `aws`, `android`, `google`, `appscript`]} />
    <Content>
      <p>Thank you for contacting me. I will try to reach out to you as soon as possible. You can view my
        <ExternalLink href="https://www.linkedin.com/in/namanaggarwal/">LinkedIn</ExternalLink> for any other information.
      </p>
    </Content>
  </Layout>
)

export default ContactSuccessPage
