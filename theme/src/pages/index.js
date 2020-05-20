import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`naman`, `aggarwal`, `javascript`, `golang`, `aws`, `android`, `google`, `appscript`]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
