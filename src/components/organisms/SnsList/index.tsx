import * as React from 'react'
import * as ReactGA from 'react-ga'
import Img from '../../atoms/Img'
import * as style from './style.css'

const googleAnalyticsID = process.env.REACT_GA_ID || ''
ReactGA.initialize(googleAnalyticsID)

const SnsList = (props: any) => (
  <div className={ style.iconList }>
    <a href={ 'https://twitter.com/kenshir0f' } onClick={ () => ReactGA.event({ category: 'portfolio', action: 'click', label: 'snsTwitter' }) } rel={ 'noreferrer noopener' } target={ '_blank' }>
      <Img src={ 'static/images/twitter.svg' } alt={ 'twitter' } />
    </a>
    <a href={ 'https://github.com/kenshir0f' } onClick={ () => ReactGA.event({ category: 'portfolio', action: 'click', label: 'snsGithub' }) } rel={ 'noreferrer noopener' } target={ '_blank' }>
      <Img src={ 'static/images/github.svg' } alt={ 'github' } />
    </a>
    <a href={ 'https://stella-app.jp/user?id=JxV0ucdgoChBk59obOcZ7Mk7U5o1' } onClick={ () => ReactGA.event({ category: 'portfolio', action: 'click', label: 'snsStella' }) } rel={ 'noreferrer noopener' } target={ '_blank' }>
      <Img src={ 'static/images/stella_logo.png' } alt={ 'stella_logo' } />
    </a>
    <a href={ 'https://note.mu/fjkn' } onClick={ () => ReactGA.event({ category: 'portfolio', action: 'click', label: 'snsHatena' }) } rel={ 'noreferrer noopener' } target={ '_blank' }>
      <Img src={ 'static/images/note_logo.svg' } alt={ 'blog' } />
    </a>
    <a href={ 'https://speakerdeck.com/kenshir0f/' } onClick={ () => ReactGA.event({ category: 'portfolio', action: 'click', label: 'snsSpeakerDeck' }) } rel={ 'noreferrer noopener' } target={ '_blank' }>
      <Img src={ 'static/images/speakerdeck.svg' } alt={ 'speakerdeck' } />
    </a>
  </div>
)

export default SnsList
