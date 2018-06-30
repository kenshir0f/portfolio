import * as React from 'react'
import * as ReactGA from 'react-ga'
import ProfileImg from '../../molecules/ProfileImg'
import SnsList from '../../organisms/SnsList'
import { MyName, WipCaption, Copyright } from '../../atoms/Txt'
import Header from '../../organisms/Header'
import MainContainer from '../../organisms/MainContainer'

ReactGA.initialize('UA-81128467-1')

const Portfolio = (props: any) => {
  return (
    <MainContainer {...props}>
      <Header {...props} />
      <ProfileImg />
      <MyName />
      <SnsList />
      <WipCaption />
      <Copyright />
    </MainContainer>
  )
}

export default Portfolio
