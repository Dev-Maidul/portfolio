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
        <div className='overflow-hidden'>
            <Banner></Banner>
            <div className='w-full px-4 md:w-11/12 mx-auto md:px-0'>
                <Projects></Projects>
            <Skills></Skills>
            <Educations></Educations>
            <Experience></Experience>
            <AboutMe></AboutMe>
            <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;