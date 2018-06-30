import * as React from 'react'
import * as ReactGA from 'react-ga'
import { Error404 } from '../../organisms/Error'
import MainContainer from '../../organisms/MainContainer'

ReactGA.initialize('UA-81128467-1')

const ErrorPage = (props: any) => {
  return (
    <MainContainer>
      <Error404 />
    </MainContainer>
  )
}

export default ErrorPage
