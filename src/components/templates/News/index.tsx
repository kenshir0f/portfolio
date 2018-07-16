import * as React from 'react'
import * as ReactGA from 'react-ga'
import MainContainer from '../../organisms/MainContainer'
import NewsContent from '../../organisms/NewsContent'

const googleAnalyticsID = process.env.REACT_GA_ID || ''
ReactGA.initialize(googleAnalyticsID)

const News = (props: any) => {
  return (
    <MainContainer {...props}>
      <NewsContent />
    </MainContainer>
  )
}

export default News
