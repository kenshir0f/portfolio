import * as React from 'react'
import Img from '../../atoms/Img'
import * as style from './style.css'

const SnsList = (props: any) => (
  <div className={style.iconList}>
    <Img src={'static/images/twitter.svg'} />
    <Img src={'static/images/github.svg'} />
    <Img src={'static/images/nippo.svg'} />
    <Img src={'static/images/hatena.svg'} />
  </div>
)

export default SnsList