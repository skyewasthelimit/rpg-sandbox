import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Hud = () => {
  return (
    <div className='hud'>
      <div className='health-bar'>Health</div>
      <div className='mana-bar'>Mana</div>
      <div className='stamina-bar'>Stamina</div>
    </div>
  )
}

export default Hud
