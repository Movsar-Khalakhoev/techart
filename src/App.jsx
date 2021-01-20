import React from 'react'
import './App.sass'
import {Switch, Redirect, Route} from 'react-router-dom'
import Step1Page from './pages/Step1Page'
import Step2Page from './pages/Step2Page'
import Step3Page from './pages/Step3Page'
import Step4Page from './pages/Step4Page'
import Result from './pages/Result'


function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="header">Калькулятор цены конструкций</div>
        <Switch>
          <Route path='/step-1' component={Step1Page}/>
          <Route path='/step-2' component={Step2Page}/>
          <Route path='/step-3' component={Step3Page}/>
          <Route path='/step-4' component={Step4Page}/>
          <Route path='/result' component={Result}/>
          <Redirect to='/step-1' />
        </Switch>
      </div>
    </div>
  )
}

export default App
