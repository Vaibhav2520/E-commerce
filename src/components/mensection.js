import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import '../styles/mensection.scss'
const Mensection = () => {
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
        MENS
      </Button>
      {anchorEl ? <div className="line"></div> : <></>}
      
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
        
          <div className='mensection-container'>
            <div className='featured-mensection'>
            Featured
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            </div>
            <div className='shoes-mensection'>
            Shoes
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            </div>
            <div className='clothing-mensection'>
            Clothing
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

export default Mensection