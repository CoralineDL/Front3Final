import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../App.css'



const Navbar = () => {

  function load() {
    "use strict";

    const switcher = document.querySelector("input");

    String.prototype.format = function () {
      let formatted = this;
  
      for (let i = 0; i < arguments.length; i++) {
        let regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
      }
  
      return formatted;
    };
  
    function calculatePath() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const path =
        'path("M {0}, {1} m -{2}, 0 a {2}, {1} 0 1, 0 {3}, 0 a {2}, {1} 0 1,0 -{3}, 0z")'.format(
          width / 2 - 25,
          height / 2,
          width / 2,
          width
        );
  
      return path;
    }
  

    function checkToggle(check) {
      switcher.checked = check;
    }

    function toggleDarkMode(state) {
      checkToggle(state);

      const hasClass = document.body.classList.contains("dark-mode");

      if (state) {
        if (!hasClass) {
          document.body.classList.add("dark-mode");
        };
      } else {
        if (hasClass) {
          document.body.classList.remove("dark-mode");
        }
      }
    }


    const useDark = window.matchMedia("(prefers-color-scheme: dark)");
    let darkModeState = useDark.matches;

    useDark.addEventListener("click", function (evt) {
      toggleDarkMode(evt.matches);
    });

    toggleDarkMode(darkModeState);

    function switchListener() {
      darkModeState = !darkModeState;
      toggleDarkMode(darkModeState);
    }

    switcher.addEventListener("change", switchListener);

  }
  
  document.addEventListener("DOMContentLoaded", load);



  return (
    <div className='nav'>
      <div className='nav2'><Link to='/'><h4>Home</h4></Link></div>
      <div className='nav2'><Link to='/favs'><h4>Favs</h4></Link></div>
      <div className="mode-switch">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider">
            <svg className="slider-icon" viewBox="0 0 24 24" fill="none" height="20" stroke="#000" strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </span>
        </label>
      </div>
    </div>
  )
}

export default Navbar