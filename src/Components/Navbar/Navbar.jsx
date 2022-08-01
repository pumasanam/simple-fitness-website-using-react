import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const toggle =()=>{
    setIcon(!icon);
  };
  return (
    <>
      <div className="nav">
        <h2>Fitness</h2>
        <ul className={icon? 'item active':'item'}>
            <li><Link className="nav_link" to="/">Home</Link></li>
            <li><Link className="nav_link" to="/">About</Link></li>
            <li><Link className="nav_link" to="/">Classes</Link></li>
            <li><Link className="nav_link" to="/">Contact</Link></li>

            <div className="icon">
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
        </ul>

        <div className="ToggleIcon" onClick={toggle}>
          {icon?<i className="fa fa-times" aria-hidden="true"></i>:<i className="fa fa-bars" aria-hidden="true"></i>}
        </div>
      </div>

      <div className="back">
        <div className="overlay"></div>
      </div>

      <div className="mid">
        <p>new way to build a healthy lifestyle!</p>
        <h2>UPGRADE YOUR BODY AT FITNESS</h2>
            <div className="button">
              <button className='simple'>Get Started</button>
              <button className='border'>Learn More</button>
            </div>
      </div>
    </>
  );
};

export default Navbar;
