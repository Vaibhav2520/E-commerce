import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import '../styles/womensection.scss'
const Womensection = () => {
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
        WOMENS
      </Button>
      {anchorEl ? <div className="women-line"></div> : <></>}
      
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
         <div className='womensection-container'>
            <div className='featured-womensection'>
            Featured
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            </div>
            <div className='shoes-womensection'>
            Shoes
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            <a href='#'> New Releases</a>
            </div>
            <div className='clothing-womensection'>
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

export default Womensection