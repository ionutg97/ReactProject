import React from 'react';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";


import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Dialog from './Components/Dialog';


class App extends React.Component
{
  constructor(){
    super();
    this.protectedRoutes =[
      {
        id:1,
        exact: true,
        path: '/',
        component: Home,
        otherProps: 'Other prop to be passed in the Route props',
      },
      {
        id:2,
        exact: true,
        path: '/dashboard',
        component: Dashboard,
        otherProps: 'Other prop to be passed in the Route props',

      }

    ]
  }

  render(){
    return (
        <Router>  
          <Navigation/> 
          <Dialog/>
          <Switch>
          {this.protectedRoutes.map( (route, index) =>(<Route key={ route.exact} {...route} /> ))}
          </Switch>
        </Router>
    );
  }
  }



export default App;