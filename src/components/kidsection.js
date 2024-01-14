import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import '../styles/kidsection.scss'
const Kidsection = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    
  return (
   <>
    <div className="line-container">
    <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        className ="button-container"
      >
        KIDS
      </Button>
      {anchorEl ? <div className="kids-line"></div> : <></>}
      
   </div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className="menu-container"
      >
        <div className='kidsection-container'>
            <div className='featured-kidsection'>
            Featured
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            </div>
            <div className='boys-kidsection'>
            Boys
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            </div>
            <div className='girls-kidsection'>
            Girls
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            </div>
          </div>
      </Menu>
   </>
    
  )
}

export default Kidsection