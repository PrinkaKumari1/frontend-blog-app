import React from 'react'
import { images } from '../constants'

const Header = () => {
  return (
    <section>
      <header className='container mx-auto px-5 flex justify-between bg-red-800'>
        <div>
          <img src={images.Logo} alt="logo" />
        </div>
        <div className='flex gap-x-9'>
          <ul className='flex gap-x-5'>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Articles</a>
            </li>
            <li>
              <a href="/">Pages</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <button>
              Sign Up
            </button>
          </ul>
        </div>
      </header>
    </section>
  )
}

export default Header