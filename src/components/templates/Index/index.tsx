import * as React from 'react'
import * as ReactGA from 'react-ga'
import ProfileImg from '../../molecules/ProfileImg'
import SnsList from '../../organisms/SnsList'
import { MyName, WipCaption, Copyright } from '../../atoms/Txt'
import MainContainer from '../../organisms/MainContainer'

const googleAnalyticsID = process.env.REACT_GA_ID || ''
ReactGA.initialize(googleAnalyticsID)

const Portfolio = (props: any) => {
  return (
    <MainContainer {...props}>
      <ProfileImg />
      <MyName />
      <SnsList />
      <WipCaption />
      <Copyright />
    </MainContainer>
  )
}

export default Portfolio
