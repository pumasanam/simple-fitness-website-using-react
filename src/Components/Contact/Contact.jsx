import React, { useEffect } from 'react';
import './Contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000
    });
  },[]);
  return (
    <>
      <div className="contact">
            <div className="form" data-aos='fade-up'>
                <h2>Feel Free To Ask Anything</h2>
                    <div className="submit">
                        <form action="">
                            <input type="text" placeholder='Name' />
                            <input type="email"placeholder='Email' />
                            <textarea name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
                            <button type='submit'>Sent Message</button>
                        </form>
                    </div>
            </div>

            <div className="map" data-aos='fade-up'>
                <h2>Where you can find us</h2>
                <p><i className="fa fa-map-marker" aria-hidden="true"></i> 000012-09898764-233332-547678</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594417.773647192!2d81.88533848239744!3d28.383823961424618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e8c77d2e68cf%3A0x34a29abcd0cc86de!2sNepal!5e0!3m2!1sen!2snp!4v1659332773129!5m2!1sen!2snp" style={{ width:"100%", height:"250px"}} title='Location' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
      </div>
    </>
  );
};

export default Contact;
