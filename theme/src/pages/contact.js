
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Content = styled.div`
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  input, textarea {
    width: 100%;
    border: 1px solid #aaa;
  }
`

const Submit = styled.div`
  text-align: center;
  font-weight: bold;
  input {
    margin-top: 1rem;
    border: none;
    color: black;
    cursor: pointer;
    background: none;
  }
`


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`naman`, `aggarwal`, `javascript`, `golang`, `aws`, `android`, `google`, `appscript`]} />
    <Content>
      <p>Please fill in the form below and I will contact you as soon as possible.</p>
      <Form method="post" action="/about" name="contact" data-netlify="true" >
        <input type="hidden" name="form-name" value="contact" />
        <InputGroup>
          <label>Name</label>
          <input type="text" name="name" id="name" required />
        </InputGroup>
        <InputGroup>
          <label>Email</label>
          <input type="email" name="email" id="email" />
        </InputGroup>
        <InputGroup>
          <label>Message</label>
          <textarea rows="5" />
        </InputGroup>
        <Submit>
          <input type="submit" value="Submit" />
        </Submit>
      </Form>
    </Content>
  </Layout>
)

export default ContactPage
