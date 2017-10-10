import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../stylesheets/main.scss'

const Layout = ({ children }) => <div>{children()}</div>

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
