import * as React from 'react'
import * as style from './style.css'
import { NewsContents, AboutHeading } from '../../atoms/Txt'

const NewsContent = (props: any) => {
  return (
    <div className={style.aboutContainer}>
      <AboutHeading>プロフィール</AboutHeading>
      <NewsContents>藤井 謙士朗</NewsContents>
      <NewsContents>デザイナー / サービス開発</NewsContents>
      <AboutHeading>登壇/発表</AboutHeading>
      <NewsContents>登壇</NewsContents>
      <NewsContents>- Bonfire Design #3</NewsContents>
      <NewsContents>- S-dev Talks</NewsContents>
      <NewsContents>- Tech Kitchen #16</NewsContents>
      <NewsContents>- Tech Kitchen #17</NewsContents>
      <NewsContents>講義</NewsContents>

      <AboutHeading>スキル/環境</AboutHeading>

    </div>
  )
}

export default NewsContent
