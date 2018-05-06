import * as React from 'react';
import App from '../components/App';

interface Props {
  message: string
}

export default class About extends React.Component<Props> {
    
    render() {
      return (<App><p>About Page ${this.props.message}</p></App>)
    }
  
  }