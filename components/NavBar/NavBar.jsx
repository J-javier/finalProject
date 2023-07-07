import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <>
        <nav className='principal'>
            <section className='imag'>
              <img src="/close.svg" alt="closeImg" />
            </section>
            <section className='busqueda'>
              <div className='searching'>
                <img src="/search1.svg" alt="Search" />
                <input type="text" />
              </div>
              <button>Search</button>
            </section>

        </nav>  
    </>
  )
}

export default NavBar