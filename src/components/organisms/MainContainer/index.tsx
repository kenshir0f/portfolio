import * as React from 'react'
import * as style from './style.css'
import Header from '../Header'

const MainContainer = (props: any) => (
  <main className={style.mainContainer}>
    <Header {...props} />
    {props.children}
  </main>
)

export default MainContainer
