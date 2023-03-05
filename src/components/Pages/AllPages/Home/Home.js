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
            {/* <section className="top-banner mx-5 flexible-container">
                <div className="half-width">
                    <main class="container">
                        <p>Hello 👋 I'm</p>
                        <section class="animation py-2 rounded">
                            <div class="first"><div>Full-Stack Developer</div></div>
                            <div class="second"><div>ReactJS Develoepr</div></div>
                            <div class="third"><div>Front-End Developer</div></div>
                        </section>
                    </main>
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
            </section > */}

            <div className="hero min-h-screen -mt-8 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.postimg.cc/ZnPpLmHy/Untitled.png" className="max-w-sm rounded-lg shadow-2xl" />

                    <div className='text-center md:text-left'>
                        <p className="text-4xl font-bold mb-5">Hello 👋 I'm</p>
                        <section class="animation py-2 mb-5 rounded">
                            <div class="first"><div>Full-Stack Developer</div></div>
                            <div class="second"><div>ReactJS Develoepr</div></div>
                            <div class="third"><div>Front-End Developer</div></div>
                        </section>
                        <p className="">An individual with a bachelor's degree who is enthusiastic about computer science and engineering and has an aptitude for self-learning.</p>
                        <p className="py-6">I am extremely dedicated to creating the website you desire. Your satisfaction is my utmost objective and I am passionate about my work.</p>
                        {/* <button className="btn btn-primary" href="1.pdf" download="Jafrin_Resume.pdf" ><FaDownload></FaDownload>Download Resume</button> */}
                        <div className='flex items-center justify-center lg:justify-start'>
                            <a href="1.pdf" download="Jafrin_Resume.pdf" className="btn btn-primary mr-2">
                                <FaDownload className='mr-2'></FaDownload>Download Resume</a>
                            <a className="btn btn-warning ml-2" href="/contact"
                            >Hire Me</a>
                        </div>

                    </div>
                </div>
            </div>
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

