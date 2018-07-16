import * as React from 'react'
import * as style from './style.css'
import { NewsTitle, NewsContents } from '../../atoms/Txt'

const NewsContent = (props: any) => {
  return (
    <div className={style.aboutContainer}>
      <NewsTitle>プロフィール</NewsTitle>
      <NewsContents>kenshir0f / ふじけん</NewsContents>
      <NewsContents>デザイナー / サービス開発</NewsContents>
    </div>
  )
}

export default NewsContent
