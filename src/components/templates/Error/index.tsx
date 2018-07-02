import * as React from 'react'
import * as ReactGA from 'react-ga'
import { Error404 } from '../../organisms/Error'
import MainContainer from '../../organisms/MainContainer'

const googleAnalyticsID = process.env.REACT_GA_ID || ''
ReactGA.initialize(googleAnalyticsID)

const ErrorPage = (props: any) => {
  return (
    <MainContainer>
      <Error404 />
    </MainContainer>
  )
}

export default ErrorPage
