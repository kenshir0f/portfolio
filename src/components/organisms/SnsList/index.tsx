import * as React from 'react'
import Img from '../../atoms/Img'
import * as style from './style.css'

const SnsList = (props: any) => (
  <div className={style.iconList}>
    <a href={'https://twitter.com/kenshir0f'}>
      <Img src={'static/images/twitter.svg'} />
    </a>
    <a href={'https://github.com/kenshir0f'}>
      <Img src={'static/images/github.svg'} />
    </a>
    <a href={'https://wikihub.io/@kenshir0f'}>
      <Img src={'static/images/nippo.svg'} />
    </a>
    <a href={'http://kenshir0f.hatenablog.com/'}>
      <Img src={'static/images/hatena.svg'} />
    </a>
  </div>
)

export default SnsList