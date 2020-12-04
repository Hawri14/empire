import React from 'react';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';   // here we are just importing the pages
import Aboutus from './pages/Aboutus/Aboutus';
import Movies from './pages/Movies/Movies';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { Navbar, Footer } from './components';

function App() {
  return (              //here we just give a link to the file so the code knows where to get the information from
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
