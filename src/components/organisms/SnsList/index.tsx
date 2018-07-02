import * as React from 'react'
import * as ReactGA from 'react-ga'
import Img from '../../atoms/Img'
import * as style from './style.css'

const googleAnalyticsID = process.env.REACT_GA_ID || ''
ReactGA.initialize(googleAnalyticsID)

const SnsList = (props: any) => (
  <div className={style.iconList}>
    <a href={'https://twitter.com/kenshir0f'} onClick={() => ReactGA.event({ category: 'portfolio', action: 'click', label: 'snsTwitter' })}>
      <Img src={'static/images/twitter.svg'} />
    </a>
    <a href={'https://github.com/kenshir0f'} onClick={() => ReactGA.event({ category: 'portfolio', action: 'click', label: 'snsGithub' })}>
      <Img src={'static/images/github.svg'} />
    </a>
    <a href={'https://wikihub.io/@kenshir0f'} onClick={() => ReactGA.event({ category: 'portfolio', action: 'click', label: 'snsNippo' })}>
      <Img src={'static/images/nippo.svg'} />
    </a>
    <a href={'http://kenshir0f.hatenablog.com/'} onClick={() => ReactGA.event({ category: 'portfolio', action: 'click', label: 'snsHatena' })}>
      <Img src={'static/images/hatena.svg'} />
    </a>
    <a href={'https://speakerdeck.com/kenshir0f/'} onClick={() => ReactGA.event({ category: 'portfolio', action: 'click', label: 'snsSpeakerDeck' })}>
      <Img src={'static/images/speakerdeck.svg'} />
    </a>
  </div>
)

export default SnsList