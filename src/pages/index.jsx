import React from 'react'

import Link from 'gatsby-link'

import SiteNavi from '../components/SiteNavi'
import SiteCard from '../components/SiteCard'
import SiteFooter from '../components/SiteFooter'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <header>
          <SiteNavi title={'Waffle Studio'} {...this.props} />
        </header>
        <main className="main">
          <section className="section section--intro">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 d-block d-md-flex section--intro__col-left">
                  <h1 className="section--intro__title pl-4 text-uppercase">
                    Modern Web Desing
                  </h1>
                </div>
                <div className="col-12 col-md-6 d-block d-md-flex">
                  <div className="call-to-action bg-alabaster mt-auto px-4 py-5">
                    <p className="h5 mb-4">
                      Aenean lacinia bibendum nulla sed consectetur.
                    </p>
                    <Link
                      to="/"
                      className="text-underlined text-dark font-weight-bold"
                    >
                      See Our Portafolio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    )
  }
}
