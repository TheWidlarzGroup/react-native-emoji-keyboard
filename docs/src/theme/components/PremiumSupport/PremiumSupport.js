import React from 'react'
import './PremiumSupport.style.css'

export const PremiumSupport = () => {
  return (
    <div className="premium-support__container">
      <span className="premium-support__text">We are TheWidlarzGroup</span>
      <a
        target="_blank"
        href="https://www.thewidlarzgroup.com/?utm_source=rnemoji&utm_medium=docs#Contact"
        className="premium-support__link"
        rel="noreferrer"
      >
        Premium support →
      </a>
    </div>
  )
}
