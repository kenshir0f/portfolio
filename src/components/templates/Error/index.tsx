import * as React from 'react'
import * as ReactGA from 'react-ga'
import { Error404 } from '../../organisms/Error'

const googleAnalyticsID = process.env.REACT_GA_ID || ''
ReactGA.initialize(googleAnalyticsID)

interface Props {
  children: any
}

export default class ErrorPage extends React.Component<Props> {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}
