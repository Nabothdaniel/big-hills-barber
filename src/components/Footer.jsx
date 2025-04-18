import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-primary text-white text-center'>
      <p>&copy; copyright {new Date().getFullYear()}</p>
      <p className="mt-3">made with love by <Link to='https://github.com/Nabothdaniel/'target='blank' className='text-emerald-400'>DannyTheewebdev</Link></p>
    </div>
  )
}

export default Footer
