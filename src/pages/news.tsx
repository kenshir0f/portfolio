import * as React from 'react'
import Portfolio from '../components/templates/Index'
import Head from '../components/utils/Head'
import NewsContent from '../components/organisms/NewsContent'

interface Props {
  url: {
    pathname: string
  },
  children: any
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Portfolio {...this.props}>
        <Head
          title={'News / kenshir0f.com'}
          description={'News / kenshir0f.com'}
          keyword={'kenshir0f'}
          image={'https://kenshir0f.com/static/images/ogp.jpg'}
          url={'https://kenshir0f.com/news'}
        />
        <NewsContent />
      </Portfolio>
    )
  }
}
