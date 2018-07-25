import React from 'react'
import { Link } from 'react-router-dom'

const OverlayedMenu = ({
  isVisible = false,
  links = [],
  toggleHandler
}) =>
  <React.Fragment>
    <div 
      className={`overlayed-menu overlayed-menu--${
        isVisible ? 'visible' : 'hidden'
      }`}
    >
      {links.map(link => 
        <span href={link.route} className='overlayed-menu__item'>
          {link.name}
        </span>
      )}
    </div>
    <div className='navbar-toggler' onClick={toggleHandler}>
      <span className='navbar-toggler__item'></span>
      <span className='navbar-toggler__item'></span>
      <span className='navbar-toggler__item'></span>
    </div>
  </React.Fragment>

// OverlayedMenu.proptTypes = {
//   isVisible: PropTypes.bool,
//   items: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.object),
//     PropTypes.arrayOf(PropTypes.string)
//   ]),
//   toggleHandler: PropTypes.func
// }  

export default OverlayedMenu