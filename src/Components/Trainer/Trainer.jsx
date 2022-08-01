import React, {useEffect} from 'react';
import './Trainer.css';
import TrainerImg from './../img/team1.jpg';
import TrainerImg1 from './../img/team2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Trainer = () => {
    useEffect(()=>{
        Aos.init({
          duration:1000
        });
      },[]);
  return (
    <>
      <div className="trainer">
            <div data-aos='fade-up' className="about">
                <h2>Hello, we are Fitness</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum repudiandae animi itaque nisi, inventore facilis cumque, soluta iste reiciendis cupiditate. Temporibus beatae culpa autem nam id saepe vero qui. Perferendis cumque explicabo itaque maxime quos. Eligendi, dolore, reiciendis pariatur qui obcaecati eius odio doloremque consectetur porro facere nostrum autem.</p>
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquid quae quibusdam molestias perspiciatis, dolorum architecto vero ipsum sunt aut odit deserunt error, tempora dignissimos quisquam eius fuga placeat ab!</p>
            </div>

            <div data-aos='fade-up' className="people">
                <div className="team1">
                    <div className="img">
                        <img src={TrainerImg} alt="" />
                    </div>
                    <div className="teamdetails">
                        <div className="name">
                            <h4>Mary Yan</h4>
                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        </div>
                        <div className="pro">
                            <p>Yoga Instructor</p>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>

                <div className="team1">
                    <div className="img">
                        <img src={TrainerImg1} alt="" />
                    </div>
                    <div className="teamdetails">
                        <div className="name">
                            <h4>Mary Yan</h4>
                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        </div>
                        <div className="pro">
                            <p>Yoga Instructor</p>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  );
};

export default Trainer;
