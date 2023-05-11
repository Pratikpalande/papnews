import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class navabar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  ">
          <div className="container-fluid">
            <a className="navbar-brand fs-4 fst-italic" href="/"><ion-icon name="newspaper-outline"></ion-icon> PAP'sNews</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link fs-6 " aria-current="page" href="/">General</a>
                </li>

                {/* <li><a className="nav-link fs-6" href="/Business">Business</a></li> */}
                <li> <a className="nav-link fs-6" href="/Entertainment">  Entertainment</a></li>
                {/* <li><a className="nav-link fs-6" href="/General">General</a></li>/ */}
                <li> <a className="nav-link fs-6" href="/Health">  Health</a></li>
                <li> <a className="nav-link fs-6" href="/Science">Science</a></li>
                <li><a className="nav-link fs-6" href="/Sports">Sports</a></li>
                <li><a className="nav-link fs-6" href="/Technology ">Technology</a></li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle fs-6" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    News channels
                  </Link>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" rel="noreferrer" href="https://www.indiatvnews.com/livetv" >Indiatv</a></li>
                    <li><a className="dropdown-item" rel="noreferrer" href="https://zeenews.india.com/live-tv" target='_blank'>Zeenews</a></li>
                    <li><a className="dropdown-item" rel="noreferrer" href="https://timesofindia.indiatimes.com/india" target='_blank'>Timesofindia</a></li>
                  </ul>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default navabar
