import React from 'react'

import Link from 'gatsby-link'

import SiteNavi from '../components/SiteNavi'
import SiteCard from '../components/SiteCard'
import SiteFooter from '../components/SiteFooter'

export default class Index extends React.Component {
  render() {
    return (
      <div className="page page--index">
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
                    <Link to="/" className="text-underlined">
                      See Our Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section--heading">
            <div className="container text-center">
              <h2 className="text-uppercase mb-3 mb-md-5">Heading</h2>
              <p className="w-75 mx-auto mb-3 mb-md-5">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Nullam quis risus eget urna mollis ornare
                vel eu leo.
              </p>
              <Link
                to="/"
                className="text-underlined text-underlined--blue text-uppercase"
              >
                Read More
              </Link>
            </div>
          </section>
          <section className="section section--what-we-do">
            <div className="container text-center">
              <h2 className="text-uppercase mb-5">What we do</h2>
              <div className="row mb-3 mb-md-5">
                <div className="col-12 col-md-4">
                  <img
                    src="img/icons/ruler.svg"
                    className="mb-5"
                    height="85"
                    alt="plan"
                  />
                  <h4>Plan</h4>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et.
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <img
                    src="img/icons/devices.svg"
                    className="mb-5"
                    height="85"
                    alt="design"
                  />
                  <h4>Design</h4>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et.
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <img
                    src="img/icons/rocket-launch.svg"
                    className="mb-5"
                    height="85"
                    alt="deploy"
                  />
                  <h4>Deploy</h4>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et.
                  </p>
                </div>
              </div>
              <Link
                to="/"
                className="text-underlined text-underlined--green text-uppercase"
              >
                View More
              </Link>
            </div>
          </section>
          <section className="section section--portfolio">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 mb-5 mb-md-0">
                  <div className="pr-0 pr-md-5">
                    <img
                      className="img-fluid"
                      src="img/portfolio.jpg"
                      alt="portfolio"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="pl-0 pl-md-5">
                    <h2 className="text-uppercase mb-3 mb-md-5">Portfolio</h2>
                    <p className="mb-3 mb-md-5">
                      Aenean eu leo quam. Pellentesque ornare.
                    </p>
                    <Link
                      to="/"
                      className="text-underlined text-underlined--pink text-uppercase"
                    >
                      See Our Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section--work-with-us">
            <div className="container text-center">
              <h2 className="text-uppercase mb-3 mb-md-5">Work with us</h2>
              <p className="mb-3 mb-md-5">
                Aenean eu leo quam. Parturient Purus Fusce
              </p>
              <Link to="/" className="btn btn--purple text-uppercase">
                Contact Now
              </Link>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    )
  }
}
