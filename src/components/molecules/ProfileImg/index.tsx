import * as React from 'react'
import Img from '../../atoms/Img'
import * as style from './style.css'

interface ProfileImgPresenterObj {
  props: any,
  className: string
}

export const ProfileImgPresenter = ({
  className = '',
  ...props
}: ProfileImgPresenterObj) => (
    <div className={[className, style.profileImgContainer].join(' ')}>
      <Img src={'static/images/profile.png'} className={style.profileImg} />
    </div>
  )

interface ProfileImgObj {
  presenter: any,
  className: string,
  props: any
}

export const ProfileImgContainer = ({
  presenter,
  className = '',
  ...props
}: ProfileImgObj) => (
    presenter({
      className, ...props
    })
  )

const ProfileImg = (props: any) => (
  <ProfileImgContainer presenter={(presenterProps: any) => <ProfileImgPresenter {...presenterProps} />} {...props} />
)

export default ProfileImg
