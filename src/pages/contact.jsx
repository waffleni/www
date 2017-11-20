import React from 'react'

import Link from 'gatsby-link'

import ContactForm from '../components/ContactForm'

const ContactPage = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h1>We’re here</h1>
        <h2>Our door is always open for a good cup of coffee and waffles</h2>
        <h5 className="text-uppercase strong mb-4">Connect</h5>
        <ul className="list-unstyled">
          <li className="d-inline-block mr-4">
            <a href="//facebook.com" target="__blank">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li className="d-inline-block mr-4">
            <a href="//facebook.com" target="__blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
          <li className="d-inline-block mr-4">
            <a href="//google.com" target="__blank">
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </li>
          <li className="d-inline-block">
            <a href="//twitter.com" target="__blank">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <div
        className="col-sm-12 col-md-6"
        style={{ backgroundColor: '#58c7ff' }}
      >
        <div className="section">
          <h1 className="text-right mt-3 mb-3">
            <i className="fa fa-close" aria-hidden="true" />
          </h1>
        </div>
        <h1>Let's Talk</h1>
        <h2>Share your excitement with us.</h2>
        <ContactForm />
      </div>
    </div>
  </div>
)

export default ContactPage
