import React from 'react'

import Link from 'gatsby-link'

import SiteNavi from '../components/SiteNavi'
import SiteFooter from '../components/SiteFooter'

const IndexPage = () => (
  <div className="page page--index">
    <header>
      <SiteNavi title={'Waffle Studio'} />
    </header>
    <main className="main">
      <section className="section section--intro">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-block d-md-flex section--intro__col-left">
              <h1 className="section--intro__title pl-4 text-uppercase typewriter">
                Modern Web Desing
              </h1>
            </div>
            <div className="col-12 col-md-6 d-block d-md-flex">
              <div className="call-to-action bg-alabaster mt-auto px-4 py-5">
                <p className="h5 mb-4">We design and develop your ideas.</p>
                <Link to="#waffleni-portfolio" className="text-underlined">
                  See Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--heading">
        <div className="container text-center">
          <h2 className="text-uppercase mb-3 mb-md-5">Who we are</h2>
          <p className="w-75 mx-auto mb-3 mb-md-5">
            A friendly and experienced team of entrepreneurs, marketers,
            designers and software engineers that work together to create
            engaging digital products for your <strong>users</strong>.
          </p>
          <Link
            to="/"
            className="text-underlined text-underlined--blue text-uppercase"
          >
            Meet The Team
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
                Transform your ideas into tangible requirements and a reachable
                product.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img
                src="img/icons/devices.svg"
                className="mb-5"
                height="85"
                alt="design"
              />
              <h4>Design & Develop</h4>
              <p>
                Build your product using the last and best technology stack.
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
                Use a robust and secure cloud for make your users feel like
                home.
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
      <section className="section section--portfolio" id="waffleni-portfolio">
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
                  We mix the beautiful with the usable. In our proven process we
                  crystallize what's most important and help users find their
                  way in your appealing product.
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
          <p className="w-75 mx-auto mb-3 mb-md-5">
            Are you about to launch a product? Do you want to re-design your
            company’s website? Maybe you have a half-baked idea that’s not yet
            fully shaped, whatever it is, we can give you a hand.
          </p>
          <Link to="/" className="btn btn--purple text-uppercase">
            Let's Talk
          </Link>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
)

export default IndexPage
