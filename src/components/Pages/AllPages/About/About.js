import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className="section about-section " id="about">
            <div className="container">
                <div className="row align-items-center justify-content-around flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h3 className="dark-color">About me.</h3>
                            <h4 className="theme-color">Dedicated Web Developer</h4>
                            <p>In the past few months, I have constructed more than 15 websites. I am very serious and reliable when it comes to my work and meeting deadlines. I am devoted to delivering high-quality work and continued service until you are content.</p>
                            {/* <div className="btn-bar">
                                <a className="px-btn theme" href="/">View Works</a>
                                <a className="px-btn theme-t" href="/">Download CV</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-5 text-center">
                        <div className="about-img">
                            <img src="https://img.freepik.com/premium-vector/girl-coding-designing-with-pc-illustration_418302-2383.jpg?w=740" className='w-50 rounded' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;