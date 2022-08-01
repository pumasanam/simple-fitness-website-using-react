import React, { useEffect } from 'react';
import './Class.css';
import TrainerImg from './../img/class1.jpg';
import TrainerImg1 from './../img/class2.jpg';
import TrainerImg2 from './../img/class3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Class = () => {
    useEffect(()=>{
        Aos.init({
          duration:1000
        });
      },[]);
  return (
    <>
      <div className="class" data-aos='fade-up'>
        <p className='paragraph'>Get A Perfect Body</p>
        <h2 className='h2'>Our Training Classes</h2>

        <div className="classmenu">
            <div className="team1">
                        <div className="img">
                            <img src={TrainerImg} alt="" />
                        </div>
                        <div className="teamdetails">
                            <div className="name">
                                <div className="namedetails">
                                    <h4>Yoga</h4>
                                    <p>Trained By : <span>Bella</span></p>
                                </div>

                                <div className="num">
                                    <h5>$30</h5>
                                </div>
                            </div>
                            <div className="pro">
                                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Iste, molestias.</p>
                            </div>
                        </div>
            </div>

            <div className="team1">
                        <div className="img">
                            <img src={TrainerImg1} alt="" />
                        </div>
                        <div className="teamdetails">
                            <div className="name">
                                <div className="namedetails">
                                    <h4>Yoga</h4>
                                    <p>Trained By : <span>Bella</span></p>
                                </div>

                                <div className="num">
                                    <h5>$30</h5>
                                </div>
                            </div>
                            <div className="pro">
                                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Iste, molestias.</p>
                            </div>
                        </div>
            </div>

            <div className="team1">
                        <div className="img">
                            <img src={TrainerImg2} alt="" />
                        </div>
                        <div className="teamdetails">
                            <div className="name">
                                <div className="namedetails">
                                    <h4>Yoga</h4>
                                    <p>Trained By : <span>Bella</span></p>
                                </div>

                                <div className="num">
                                    <h5>$30</h5>
                                </div>
                            </div>
                            <div className="pro">
                                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Iste, molestias.</p>
                            </div>
                        </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Class;
