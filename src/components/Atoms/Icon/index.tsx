import * as React from 'react';
import * as styles from './style.css';

export const IconPresenter = ({
  iconName = 'header-menu',
  height = 20,
  width = 20,
  ...props,
}) => (
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
}) => {
  if(onClick) className += ` ${ styles.example }`;
  return presenter({ onClick, className, ...props })
}

export const iconFactory = (iconName: string) => props => (
  <IconContainer presenter={ presenterProps => <IconPresenter { ...presenterProps } />} { ...{ iconName, ...props} } />
);

export const HeaderMenuIcon = iconFactory('header-menu');
