import * as React from 'react'
import Img from '../../atoms/Img'
import * as style from './style.css'

export const ProfileImg = (props: any) => (
  <div className={style.profileImg}>
    <Img src={'static/images/profile.png'} />
  </div>
)