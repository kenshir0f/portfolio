import * as React from 'react'
import * as style from './style.css'
import { NewsTitle, NewsContents } from '../../atoms/Txt'

const NewsContent = (props: any) => {
  return (
    <div className={style.newsContainer}>
      <NewsTitle>更新情報</NewsTitle>
      <NewsContents>2018.07.21 aboutページを修正しました。</NewsContents>
      <NewsContents>2018.06.29 問い合わせページを公開しました。</NewsContents>
      <NewsContents>2018.06.10 ホームページを公開しました。</NewsContents>
    </div>
  )
}

export default NewsContent
