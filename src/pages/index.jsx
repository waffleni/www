import React from 'react'

import SiteNavi from '../components/SiteNavi'
import SiteCard from '../components/SiteCard'

export default class Index extends React.Component {
  render() {
    return (
      <div className={'main'}>
        <SiteNavi title={'Waffle Studio'} {...this.props} />
        <SiteCard title={'Prueba1'} />
        <SiteCard title={'Waffle Ni'} />
        <h1>Waffle Studio</h1>
      </div>
    )
  }
}
