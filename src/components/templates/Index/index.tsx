import * as React from 'react'
import * as ReactGA from 'react-ga'
import Header from '../../organisms/Header'

const googleAnalyticsID = process.env.REACT_GA_ID || ''
ReactGA.initialize(googleAnalyticsID)

interface Props {
  children: any
}

export default class Portfolio extends React.Component<Props> {
  render() {
    return (
      <main>
        <Header {...this.props}></Header>
        {this.props.children}
      </main>
    )
  }
}
