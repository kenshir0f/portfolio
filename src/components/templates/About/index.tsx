import * as React from 'react'
import { NewsTitle, NewsContents } from '../../atoms/Txt'
import MainContainer from '../../organisms/MainContainer'
import * as style from './style.css'

const About = (props: any) => (
  <MainContainer {...props}>
    <div className={style.aboutContainer}>
      <NewsTitle>プロフィール</NewsTitle>
      <NewsContents>kenshir0f / ふじけん</NewsContents>
      <NewsContents>デザイナー / サービス開発</NewsContents>
    </div>
  </MainContainer>
)

export default About
