import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../stylesheets/main.scss'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Waffle Studio"
      meta={[
        {
          name: 'description',
          content:
            'A friendly and experienced team of entrepreneurs, marketers, designers and software engineers that work together to create engaging digital products for your users.',
        },
        { name: 'keywords', content: 'nicaragua, app, development' },
      ]}
    />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
