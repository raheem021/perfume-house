import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuIcon from '../assets/ci_hamburger-lg.png'
import { Link } from 'react-router-dom';

const OffCanvass = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div onClick={handleShow}>
        <img src={menuIcon} alt="menu-icon" />
    

    </div>
    
    <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
          <div className='d-flex flex-column container mt-3 gap-3'>
            <button className="login-btn w-100"> <Link className="text-decoration-none" to="/auth/signin">Log in</Link>

            </button>
            <button className='Sign-up btn w-100'> <Link className="text-decoration-none" to="/auth/signup">Sign up</Link></button>


          </div>
          
        </Offcanvas.Body>
      </Offcanvas>
    
    
    
    
    </>

  )
}

export default OffCanvass
