import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './utils/Global';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

export default function App() {
  return (<>
    <Router>
      <GlobalProvider>
        <Header />
        <Switch>
          <Route path="/" component={() => <Content />} />
        </Switch>
        <Footer />
      </GlobalProvider>
    </Router>
  </>)
}