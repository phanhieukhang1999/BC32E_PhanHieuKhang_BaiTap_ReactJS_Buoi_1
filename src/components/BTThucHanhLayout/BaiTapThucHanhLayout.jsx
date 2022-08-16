import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Header/>
        </nav>
        <div>
             <Body/>
        </div>
        <footer className='py-5 bg-dark'>
          <Footer/>
        </footer>

      </div>
    )
  }
}
