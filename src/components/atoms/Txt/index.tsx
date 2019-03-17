import * as React from 'react'
import * as style from './style.css'

const Txt = (props: { className: string, children: any }) => (
  <p className={ props.className }>
    { props.children }
  </p>
)
export default Txt

export const MyName = (props: any) => (
  <Txt className={ style.myName }>kenshir0f</Txt>
)

export const HeadingTitle = (props: any) => (
  <Txt className={ style.myName } { ...props } />
)

export const Caption = (props: any) => (
  <Txt className={ style.caption } { ...props } />
)

export const NewsTitle = (props: any) => (
  <Txt className={ style.newsTitle } { ...props } />
)

export const NewsContents = (props: any) => (
  <Txt className={ style.newsContents } { ...props } />
)

export const AboutHeading = (props: any) => (
  <Txt className={ style.aboutHeading } { ...props } />
)

export const AboutContent = (props: any) => (
  <Txt className={ style.aboutContent } { ...props } />
)

export const AboutSpeaker = (props: any) => (
  <Txt className={ style.aboutSpeaker } { ...props } />
)

export const Content20190305 = () => (
  <div className={ style.newsContainer }>
    <p className={ style.newsDate }>2019.03.05</p>
    <p className={ style.newsText }>
      <a className={ style.newsLink } href={ 'https://internship.cookpad.com/2019/spring/' }>クックパッド春インターンシップ2019</a>
      のサービス開発コースの講師を担当しました。資料は
    <a className={ style.newsLink } href={ 'https://speakerdeck.com/kenshir0f/cookpad-spring-internship-2019-service-development-course' }>こちら</a>
    </p>
    <p className={ style.newsTextEnglish }>I gave a lecture on cookpad internship for service development cource.</p>
  </div>
)

export const Content20190227 = () => (
  <div className={ style.newsContainer }>
    <p className={ style.newsDate }>2019.02.27</p>
    <p className={ style.newsText }>Cookpad TechConf 2019に登壇しました。</p>
    <iframe
      src='https://www.youtube.com/embed/X9JjTfeEJ5A'
      frameBorder='0'
      style={ {
        display: 'block',
        maxWidth: '99%',
        width: '560px',
        height: '315px'
      } }
      allowFullScreen>
    </iframe>
    <p className={ style.newsText }>
      資料は<a className={ style.newsLink } href={ 'https://speakerdeck.com/kenshir0f/cookpad-techconf-2019-komerco-service-dev' }>こちら</a>
    </p>
    <p className={ style.newsTextEnglish }>I presented my works at Cookpad TechConf 2019</p>
  </div>
)

export const Content20190101 = () => (
  <div className={ style.newsContainer }>
    <p className={ style.newsDate }>2019.01.01</p>
    <p className={ style.newsText }>あけましておめでとうございます。今年もよろしくお願い申し上げます。</p>
    <p className={ style.newsTextEnglish }>HAPPY NEW YEAR.</p>
  </div>
)

export const Content20181210 = () => (
  <div className={ style.newsContainer }>
    <p className={ style.newsDate }>2018.12.10</p>
    <p className={ style.newsText }>第1回AtomicDesignについて考える会に登壇しました。</p>
    <p className={ style.newsTextEnglish }>I presented my works at Think Atomic Design talks.</p>
    <iframe
      className={ 'note-embed' }
      src='https://note.mu/embed/notes/n9c8f8921b13c'
      style={ {
        border: 0,
        display: 'block',
        maxWidth: '99%',
        width: '480px',
        padding: '0px',
        margin: '10px 0px',
        position: 'static',
        visibility: 'visible'
      } } height='400'>
    </iframe> <script async src='https://note.mu/scripts/embed.js'></script>
  </div >
)

export const Content20181206 = () => (
  <div className={ style.newsContainer }>
    <p className={ style.newsDate }>2018.12.06</p>
    <p className={ style.newsText }>ブログを書きました。</p>
    <p className={ style.newsTextEnglish }>I wrote my blog about Figma for 6 month</p>
    <iframe
      className={ 'note-embed' }
      src='https://note.mu/embed/notes/n9bc5b6ec9fc2'
      style={ {
        border: 0,
        display: 'block',
        maxWidth: '99%',
        width: '480px',
        padding: '0px',
        margin: '10px 0px',
        position: 'static',
        visibility: 'visible'
      } } height='400'>
    </iframe>
  </div>
)

export const Content20180822 = () => (
  <div className={ style.newsContainer }>
    <p className={ style.newsDate }>2018.08.22</p>
    <p className={ style.newsText }><a href={ 'https://cookpad.connpass.com/event/95935/' } className={ style.newsLink }>Tech Kitchen #17</a>に登壇しました。</p>
    <p className={ style.newsTextEnglish }>I presented about CIID at Tech Kitchen #17.</p>
  </div>
)

export const Content20180719 = () => (
  <div className={ style.newsContainer }>
    <p className={ style.newsDate }>2018.07.19</p>
    <p className={ style.newsText }><a href={ 'https://cookpad.connpass.com/event/92325/' } className={ style.newsLink }>Tech Kitchen #16</a>に登壇しました。</p>
    <p className={ style.newsTextEnglish }>I presented about new Business Development at Tech Kitchen #16.</p>
  </div>
)

export const Content20180713 = () => (
  <div className={ style.newsContainer }>
    <p className={ style.newsDate }>2018.07.13</p>
    <p className={ style.newsText }>ブログを<a href={ 'https://note.mu/fjkn' } className={ style.newsLink }>note</a>に移行しました。</p>
    <p className={ style.newsTextEnglish }>My blog was moved to note.</p>
  </div>
)

export const Copyright = () => (
  <Txt className={ style.copyright }>
    © kenshir0f 2018
  </Txt>
)
