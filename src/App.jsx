import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppStore from './utils/AppStore'

const App = () => {
  return (
    <>
      <Provider store={AppStore}>
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
    </>

  )
}

export default App