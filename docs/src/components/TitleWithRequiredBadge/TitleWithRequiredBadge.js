import React from 'react'
import './TitleWithRequiredBadge.style.css'

export const TitleWithRequiredBadge = ({ children }) => {
  return (
    <>
      <span className="TitleWithRequiredBadge__badge">Required</span>
      <span>{children}</span>
    </>
  )
}
