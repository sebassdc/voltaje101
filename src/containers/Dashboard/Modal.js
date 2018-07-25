import React from 'react'

export default ({ children, showed, className = '' }) =>
  <div className={`modal-container ${showed ? 'showed' : ''}`}>
    <div className={`modal ${className}`}>
      {children}
    </div>
  </div>