import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkComponent({ path, text, icon, className }) {
  return (
    <Link className={className} to={`${path}`}>
      {icon} {text}
    </Link>
  )
}
