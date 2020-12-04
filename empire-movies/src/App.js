import React from 'react';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Aboutus from './pages/Aboutus/Aboutus';
import Movies from './pages/Movies/Movies';
import Login from './pages/Login/Login'
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/Login" exact component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
