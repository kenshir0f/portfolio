import * as React from 'react'
import * as style from './style.css'
import { AboutHeading, AboutContent, AboutSpeaker } from '../../atoms/Txt'
import Img from '../../atoms/Img'

const NewsContent = (props: any) => {
  return (
    <div className={style.aboutContainer}>
      <AboutHeading>Profile</AboutHeading>
      <AboutContent>藤井 謙士朗 (ふじい けんしろう)</AboutContent>
      <AboutContent>Designer at Cookpad, Inc / Service Developer</AboutContent>
      <AboutContent>人の行動に変化を起こす仕組みを作ることが好きでデザイナーになりました。</AboutContent>
      <AboutContent>アプリやウェブの開発をたまにやってます。ウデマエXガチ勢</AboutContent>

      <AboutHeading>Speaker</AboutHeading>
      <AboutSpeaker><a href={'https://yj-meetup.connpass.com/event/83635/'} className={style.aboutLink}>Bonfire Design #3</a> 「小さくはじめる新規事業のデザインシステム」<a href={'https://speakerdeck.com/kenshir0f/2018-bonfire-design-komerco-design-system'} className={style.aboutSpeakerDeckContainer}><Img src={'static/images/speakerdeck.svg'} alt={'speakerdeck'} className={style.aboutSpeakerDeck} /></a></AboutSpeaker>
      <AboutSpeaker><a href={'https://s-dev-talks.connpass.com/event/90750/'} className={style.aboutLink}>S-dev Talks #2</a> 「新規事業でワークフローをデザインする話」<a href={'https://speakerdeck.com/kenshir0f/s-dev-talks-number-2-komerco-team-building'} className={style.aboutSpeakerDeckContainer}><Img src={'static/images/speakerdeck.svg'} alt={'speakerdeck'} className={style.aboutSpeakerDeck} /></a></AboutSpeaker>
      <AboutSpeaker><a href={'https://cookpad.connpass.com/event/92325/'} className={style.aboutLink}>Tech Kitchen #16</a> 「ゼロからはじめるサービスのデザイン」<a href={'https://speakerdeck.com/kenshir0f/tech-kitchen-number-16-komerco-design'} className={style.aboutSpeakerDeckContainer}><Img src={'static/images/speakerdeck.svg'} alt={'speakerdeck'} className={style.aboutSpeakerDeck} /></a></AboutSpeaker>
      <AboutSpeaker><a href={'https://cookpad.connpass.com/event/95935/'} className={style.aboutLink}>Tech Kitchen #17</a> 「Design for Behavior and Impact」</AboutSpeaker>

      <AboutHeading>Carrer</AboutHeading>
      <AboutSpeaker>Cookpad, Inc. | 2017 - Present</AboutSpeaker>
      <AboutSpeaker>Chikaku, Inc. | 2015 - 2018</AboutSpeaker>

    </div>
  )
}

export default NewsContent
