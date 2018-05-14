import * as React from 'react';
import * as styles from './style.css';

interface ic_pr {
  iconName: string,
  height: number,
  width: number,
  props: any
}

interface ic_co {
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
}: ic_pr) => (
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
}: ic_co) => {
  className += ` ${ styles.example }`;
  return presenter({ onClick, className, ...props })
}

export const iconFactory = (iconName: string) => (props: any) => (
  <IconContainer presenter={ (presenterProps: any) => <IconPresenter { ...presenterProps } />} { ...{ iconName, ...props} } />
);

export const HeaderMenuIcon = iconFactory('header-menu');
