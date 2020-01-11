import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Starwars from '../components/Starwars'
import Dreamteam from '../components/Dreamteam'
import Page404 from '../components/404'
import {aboutPath, contactPath, homePath, rootPath, starwarsPath} from "../constants/Const";

const StarwarsRouter = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Nav/>
      <div className='container'>
        <div className='main-container'>
          <Switch>
            <Route path={[rootPath, homePath]} component={Home} exact={true}/>
            <Route path={aboutPath} component={About}/>
            <Route path={starwarsPath} component={Starwars}/>
            <Route path={contactPath} component={Contact}/>
            <Route component={Page404}/>
          </Switch>
        </div>
        <Dreamteam/>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}
export default StarwarsRouter