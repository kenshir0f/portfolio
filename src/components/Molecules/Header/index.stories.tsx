import * as React from 'react'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import {HeaderMenuIcon} from '../../Atoms/Icon/index'
import Img from '../../Atoms/Img/index'
import Header from './Header'

storiesOf('Header', module)
  .add('デフォルト', () => <p><HeaderMenuIcon/></p>)
  .add('デフォルト2', () => <div>hoge</div>)
  .add('デフォルト3', () => <Header></Header>)