import * as React from 'react';
import Img from '../../Atoms/Img/index';
import { HeaderMenuIcon } from '../../Atoms/Icon/index'
import Link from 'next/link';

export const HeaderPresenter = (
  pathname,
  ...props
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

export const HeaderContainer = ({
  presenter,
  className = '',
  ...props
}) => (
  presenter({
    className, ...props
  })
);


const Header = props => (
  <HeaderContainer presenter={ presenterProps => <HeaderPresenter { ...presenterProps} /> } { ...props } />
);



export default Header;