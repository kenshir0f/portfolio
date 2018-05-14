import * as React from 'react';
import * as styles from './style.css';
import { className } from '../Img/style.css';

interface test {
  iconName: string,
  height: number,
  width: number,
  props: any
}

interface test2 {
  presenter: any,
  className: string,
  onClick: any,
  props: any
}

export const IconPresenter = ({
  iconName,
  height = 20,
  width = 20,
  ...props,
}: test) => (
  <img 
    src={`/static/${ iconName }.svg`}
    alt=""
    height={ height }
    width={ width }
    { ...props }
  />
)

export const IconContainer = ({
  presenter,
  className = '',
  onClick,
  ...props,
}: test2) => {
  className += ` ${ styles.example }`;
  return presenter({ onClick, className, ...props })
}

export const iconFactory = (iconName: string) => (props: any) => (
  <IconContainer presenter={ (presenterProps: any) => <IconPresenter { ...presenterProps } />} { ...{ iconName, ...props} } />
);

export const HeaderMenuIcon = iconFactory('header-menu');
