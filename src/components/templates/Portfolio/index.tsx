import * as React from 'react'
import { ProfileImg } from '../../molecules/ProfileImg'
import SnsList from '../../organisms/SnsList'
import { MyName, WipCaption, Copyright } from '../../atoms/Txt'

const Portfolio = (props: any) =>
  <main>
    <div>
      <ProfileImg />
      <MyName />
      <SnsList />
      <WipCaption />
      <Copyright />
    </div>
  </main>

export default Portfolio
