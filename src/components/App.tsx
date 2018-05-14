import * as React from 'react';
import Header from './Molecules/Header/Header';

const App = ({children}: {children: any}) =>
  <main>
    <Header />
    {children}
  </main>;

export default App;
