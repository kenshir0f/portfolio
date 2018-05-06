import * as React from 'react';
import Header from './Molecules/Header/Header';

const App = ({ children }) =>
  <main>
    <Header />
    {children}
  </main>;

export default App;
