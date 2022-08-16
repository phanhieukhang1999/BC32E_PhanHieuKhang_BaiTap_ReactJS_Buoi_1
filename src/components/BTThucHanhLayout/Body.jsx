import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
      <div>
          <header className='py-5'>
              <Banner/>
          </header>
          <section className='py-4'>
              <Item/>
          </section>

      </div>
    )
  }
}
