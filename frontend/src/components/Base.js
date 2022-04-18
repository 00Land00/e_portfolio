import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'

const Base = () => {
  const navigate = useNavigate()
  return (
    <div className='container'>
      <div className='item-title'>
        <h1 className='item-title-text' onClick={() => navigate("/")}>Lander Joshua Vitug</h1>
      </div>

      <Outlet />
    </div>
  )
}

export default Base