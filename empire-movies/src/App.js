import React from 'react';
import GlobalStyle from './globalStyle'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/HomePage/Home'
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <switch>
        <Route path="/" exact component={Home} />
      </switch>
    </Router>
  );
}

export default App;
