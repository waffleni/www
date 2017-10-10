import React from 'react'

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
          <h1>Hello world</h1>
        </main>
        <SiteFooter />
      </div>
    )
  }
}
