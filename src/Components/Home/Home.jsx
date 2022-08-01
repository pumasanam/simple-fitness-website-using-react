import React from 'react';
import Navbar from '../Navbar/Navbar';
import Details from '../Details/Details';
import Trainer from '../Trainer/Trainer';
import Class from '../Class/Class';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
      <Navbar/>
      <Details/>
      <Trainer/>
      <Class/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
