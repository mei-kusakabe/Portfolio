import React from 'react';
import { FaDownload, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';

import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import './Home.css'


const Home = () => {

    // const onButtonClick = () => {
    //     // using Java Script method to get PDF file
    //     fetch('../../../../../public/1.pdf').then(response => {
    //         response.blob().then(blob => {
    //             // Creating new object of PDF file
    //             const fileURL = window.URL.createObjectURL(blob);
    //             // Setting various property values
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.download = '1.pdf';
    //             alink.click();
    //         })
    //     })
    // }
    return (
        <div className='mt-5'>
            <section className="top-banner mx-5 flexible-container">

                <div className="half-width">
                    {/* <h1><span className="orange-clr">Jafrin Iqbal Chowdhury</span></h1> */}
                    <main class="container">
                        <p>Hello 👋 I'm</p>
                        <section class="animation py-2 rounded">
                            <div class="first"><div>Full-Stack Developer</div></div>
                            <div class="second"><div>ReactJS Develoepr</div></div>
                            <div class="third"><div>Front-End Developer</div></div>
                        </section>
                    </main>
                    {/* <h3>Front-End Web Developer</h3> */}
                    <p>
                        An individual with a bachelor's degree who is enthusiastic about computer science and engineering and has an aptitude for self-learning.
                    </p>
                    <p>
                        I am extremely dedicated to creating the website you desire. Your satisfaction is my utmost objective and I am passionate about my work.
                    </p>

                    <a href="1.pdf" download="Jafrin_Resume.pdf" className="link-button me-2">
                        <FaDownload></FaDownload>Download Resume</a>

                    <a className="link-button" href="/contact"
                    >Hire Me</a>
                </div>
                <div className="half-width">
                    <img src="https://i.ibb.co/GnnYX3Z/jaf-bg.png" alt="jaf-bg" border="0" />
                </div>



            </section >
            <About></About>
            <Projects></Projects>
            <Services></Services>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div >
    );
};

export default Home;

