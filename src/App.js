
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

import Technolory from './components/Technology/Technolory';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <PrivateRoute path="/technology">
            <Technolory></Technolory>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
