import * as React from 'react'
import * as ReactGA from 'react-ga'
import Header from '../../organisms/Header'
import * as style from './style.css'
import { NewsTitle, NewsContents } from '../../atoms/Txt'

ReactGA.initialize('UA-81128467-1')

const News = (props: any) => {
  return (
    <main>
      <Header {...props} />
      <div className={style.newsContainer}>
        <NewsTitle>更新情報</NewsTitle>
        <NewsContents>2018.06.10 ホームページを公開しました。</NewsContents>
        <NewsContents>2018.06.29 問い合わせページを公開しました。</NewsContents>
      </div>
    </main>
  )
}

export default News
