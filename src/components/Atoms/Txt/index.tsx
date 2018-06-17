import * as React from 'react'
import * as style from './style.css'

const Txt = (props: any) => <p>{props.children}</p>

export default Txt

export const MyName = (props: any) => (
  <Txt className={style.myName}>kenshir0f</Txt>
)