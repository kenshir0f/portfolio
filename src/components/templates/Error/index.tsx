import * as React from 'react'
import { Error404 } from '../../organisms/Error'

const Fragment = React.Fragment

export default class ErrorContent extends React.Component<{}, {}> {
  render() {
    return (
      <Fragment>
        <Error404/>
      </Fragment>
    )
  }
}
