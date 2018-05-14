import * as React from 'react';
import Img from '../../Atoms/Img/index';
import { HeaderMenuIcon } from '../../Atoms/Icon/index'
import Link from 'next/link';

export const HeaderPresenter = (
  pathname: string,
  ...props: any[]
) => (
  <header>
    <p>
      <Img src="/static/logo.png" />
      <HeaderMenuIcon/>
    </p>
    <Link href="/">
      <a className={pathname === '/' && 'is-active' || ''}>Homee</a>
    </Link>{' '}
    <Link href="/about">
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
  </header>
);

interface test3 {
  presenter: any,
  className: string,
  props: any
}

export const HeaderContainer = ({
  presenter,
  className = '',
  ...props
}: test3) => (
  presenter({
    className, ...props
  })
);


const Header = (props: any) => (
  <HeaderContainer presenter={ (presenterProps: any) => <HeaderPresenter { ...presenterProps} /> } { ...props } />
);



export default Header;