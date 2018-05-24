import React, { Component, Fragment } from 'react';
import Search from './components/Search/Search';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Search />
      </Fragment>
    );
  }
}

export default App;
