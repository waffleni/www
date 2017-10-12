import React from 'react'
import Link from 'gatsby-link'

export default class SiteNavi extends React.Component {
  state = { collapse: '' }

  collapseNavbarToggle = () => {
    this.setState({ collapse: this.state.collapse === '' ? 'show' : '' })
  }

  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar fixed-top navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.collapseNavbarToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={'navbar-collapse collapse ' + this.state.collapse}>
          <ul className="navbar-nav">
            <NavLink location={location} title="Home" linkTo="/" />
            <NavLink location={location} title="Link 1" linkTo="/somewhere" />
          </ul>
        </div>
      </nav>
    )
  }
}

const NavLink = ({ location, title, linkTo }) => {
  let active = location.pathname === linkTo ? ' active' : ''

  return (
    <li className={'nav-item nav-link' + active}>
      <Link to={linkTo}>{title}</Link>
    </li>
  )
}
