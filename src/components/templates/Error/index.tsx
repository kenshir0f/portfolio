import * as React from 'react'
import * as ReactGA from 'react-ga'
import { Error404 } from '../../organisms/Error'

ReactGA.initialize('UA-81128467-1')

const ErrorPage = (props: any) => {
  return (
    <main>
      {props.children}
    </main>
  )
}

export default ErrorPage
