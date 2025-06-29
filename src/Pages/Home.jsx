import React from 'react';
import Banner from '../Components/Banner';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Educations from './Educations';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Educations></Educations>
            <Experience></Experience>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;