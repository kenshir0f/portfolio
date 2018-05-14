import * as React from 'react'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import {HeaderMenuIcon} from './index'

storiesOf('HeaderMenuIcon', module)
  .add('デフォルト', () => <p><HeaderMenuIcon/></p>)
  .add('デフォルト2', () => <div>hoge</div>)