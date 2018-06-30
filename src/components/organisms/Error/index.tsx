import * as React from 'react'
import * as style from './style.css'

export const Error404 = (props: any) => (
  <div className={style.errorContainer}>
    <h1 className={style.errorHeading}>ご指定のページが見つかりませんでした。</h1>
    <p className={style.errorCaption}>
      アクセスしようとしたページは削除されたか、現在利用できない可能性があります。<br />
      お手数おかけしますが、ホームページから再度お探しください。
    </p>
    <a href={'/'} className={style.errorBackToHomeButton}>トップページに戻る</a>
  </div>
)
