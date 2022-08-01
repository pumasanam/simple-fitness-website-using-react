import React, { useEffect } from 'react';
import './Details.css';
import Aos from 'aos';
import 'aos/dist/aos.css';




const Details = () => {
    useEffect(()=>{
      Aos.init({
        duration:1000
      });
    },[]);
  return (
    <>
   
      <div  className="details"  >
        <div data-aos='fade-up' className="one">
            <h3>New To The Fitness</h3>
            <h6>Your membership is up to 2 month FREE ($62.00 per month)</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iusto cum quisquam obcaecati numquam quam temporibus quidem nostrum corporis saepe!</p>
            <button>Become A Member</button>
        </div>

        <div data-aos='fade-up' className="two">
            <h3>Working Hour</h3>
            <br />
            <h5>Sunday: Closed</h5>
            <h5>Monday - Friday</h5>
            <p>7 : 00 Am - 10 : 00 PM</p>
            <br />
            <br />
            <h5>Monday - Friday</h5>
            <p>7 : 00 Am - 10 : 00 PM</p>
        </div>
      </div>
    </>
  );
};

export default Details;
