import * as React from 'react'
import * as ReactGA from 'react-ga'
import Link from 'next/link'
import * as style from './style.css'
import ProfileImg from '../../molecules/ProfileImg'

const googleAnalyticsID = process.env.REACT_GA_ID || ''
ReactGA.initialize(googleAnalyticsID)

export const HeaderPresenter = (
  props: any
) => {
  return (
    <header className={ style.headerContainer }>
      <Link href={ '/' }>
        <ProfileImg className={ style.headerLogo } />
      </Link>
      <HeaderLinkHome { ...props } />
      <HeaderLinkAbout { ...props } />
      <HeaderLinkWorks { ...props } />
      <HeaderLinkContact { ...props } />
    </header>
  )
}

interface HeaderObj {
  presenter: any,
  className: string,
  props: any
}

export const HeaderContainer = ({
  presenter,
  className = '',
  ...props
}: HeaderObj) => (
    presenter({
      className, ...props
    })
  )

const Header = (props: any) => (
  <HeaderContainer presenter={ (presenterProps: any) => <HeaderPresenter { ...presenterProps } /> } { ...props } />
)

export default Header

export const HeaderLinkFactory = (linkName: string, hrefName: string) => (props: any) => {
  let cssStyle = style.headerLink
  if (props.url.pathname === hrefName) { cssStyle = style.headerLinkActive }
  return (
    <Link href={ hrefName }>
      <a className={ cssStyle } onClick={ () => ReactGA.event({ category: 'portfolio', action: 'click', label: linkName }) }>{ linkName }</a>
    </Link>
  )
}

export const HeaderLinkHome = HeaderLinkFactory('Home', '/')
export const HeaderLinkWorks = HeaderLinkFactory('Works', '/works')
export const HeaderLinkAbout = HeaderLinkFactory('About', '/about')
export const HeaderLinkContact = HeaderLinkFactory('Contact', '/contact')
