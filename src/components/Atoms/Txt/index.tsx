import * as React from 'react'
import * as style from './style.css'

const Txt = (props: any) => <p className={props.className}>{props.children}</p>

export default Txt

export const MyName = (props: any) => (
  <Txt className={style.myName}>kenshir0f</Txt>
)

export const WipCaption = (props: any) => (
  <Txt className={style.wipCaption}>
    こんにちは、ふじけんです。<br />
    ただいま改装中でございます...<br />
    空いた時間に適当にコンテンツを追加していく予定なので、応援よろしくお願いします。
  </Txt>
)

export const Copyright = (props: any) => (
  <Txt className={style.copyright}>
    © kenshir0f 2018
  </Txt>
)