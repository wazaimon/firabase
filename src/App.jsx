import { useState } from 'react'
import './App.css'
import { Joystick, Gamepad2, GamepadDirectional } from 'lucide-react';
import logoFira from './assets/Firebase_logo.png'
export default function App() {

  return (
    <>
      <main>
        <button>
            <img src={logoFira} alt="" />
        </button>

        <footer>
          <small> </small>
          <div id="social">
            
          </div>
        </footer>
      </main>
    </>
  )
}
