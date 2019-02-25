import * as React from 'react'
import * as style from './style.css'

export default class ErrorContent extends React.Component<{}, {}> {
  render() {
    return (
      <div className={style.container}>
        <div className={ style.errorContainer }>
          <h1 className={ style.errorHeading }>404 Not Found</h1>
          <p className={ style.errorCaption }>Page doesn't exist...</p>
          <a href={ '/' } className={ style.errorBackToHomeButton }>トップに戻る</a>
        </div>
      </div>
    )
  }
}
