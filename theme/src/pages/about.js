import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"


const Content = styled.div`
  margin-top: 2rem;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`naman`, `aggarwal`, `javascript`, `golang`, `aws`, `android`, `google`, `appscript`]} />
    <Content>
      <p>I am a Software Engineer at Facebook in London. I have a strong interest in architecting and building highly scalable distributed applications. I also work on a lot of freelance projects including but not restricted to automating GSuite using Google App Script..</p>
      <p>Before Facebook, I have held technical leadership positions at Grab, Mastercard and Visa in Singapore.</p>
    </Content>
  </Layout>
)

export default AboutPage
