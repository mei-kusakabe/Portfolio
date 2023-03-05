import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'
import project1 from "../../../../assets/projects/book-trekker.jpeg"
import project2 from "../../../../assets/projects/Moments-Factory.jpeg"
import project3 from "../../../../assets/projects/E-learning-Centere.jpeg"

const Projects = () => {
    return (
        <div>
            <h2>My Projects</h2>
            <div className='service-all  border-0'>
                <div className='service m-5 teal-c text-center border-1 p-0 w-75 shadow'>
                    <img src={project1} className='w-100' alt="" />
                    <h5 className='p-3 w-100 title-font cap'>Book Trekker </h5>
                    <p className='p-3 text'>This project is a React-responsive web application whose goal is to Sell used Books</p>
                    <h6 className='mx-2'><small>Technology Used: Html, CSS, Bootstrap, React Bootstrap, ReactJs, Node.js, express.js MongoDB, Firebase,Github,vercel</small></h6>

                    <button className=" button1  text-white  fw-bold my-2 border shadow me-2"><a className='link' href="https://book-trekker.web.app/">Live Website</a></button>
                    <button className=" button1  text-white  fw-bold my-2 border shadow"><a className='link' href="https://github.com/mei-kusakabe/Book-Trekker-Client-Side">Github Client Side</a></button>

                </div>
                <div className='service m-5 teal-c text-center border-1 p-0 w-75 shadow'>
                    <img src={project2} className='w-100' alt="" />
                    <h5 className='p-3 w-100 title-font cap'>Moments Factory</h5>
                    <p className='p-3 text '>This project is a simple React-responsive web application and its goal is to provide services for various
                        sorts of photography.</p>
                    <h6 className='mx-2'><small>Technology Used: Html, CSS, Bootstrap, ReactJs, Node.js, MongoDB, Firebase, GitHub, vercel</small></h6>

                    <button className=" button1  text-white  fw-bold my-2 border shadow me-2"><a className='link' href="https://moments-factory.web.app/">Live Website</a></button>
                    <button className=" button1  text-white  fw-bold my-2 border shadow"><a className='link' href="https://github.com/mei-kusakabe/Moments-Factory-Client-Side">Github Client Side</a></button>

                </div>
                <div className='service m-5 teal-c text-center border-1 p-0 w-75 shadow'>
                    <img src={project3} className='w-100' alt="" />
                    <h5 className='p-3 w-100 title-font cap'>E-learn Center</h5>
                    <p className='p-3 text '>This project is a simple React responsive web application for a learning platform</p>
                    <h6 className='mx-2'><small>  Technology Used: Html, CSS, Bootstrap, ReactJs, Node.js, vercel, firebase</small></h6>
                    <button className="button1  text-white  fw-bold my-2 border shadow me-2"><a className='link' href="https://e-learn-centre.web.app/">Live Website</a></button>
                    <button className="button1  text-white  fw-bold my-2 border shadow"><a className='link' href="https://github.com/mei-kusakabe/E-Learn-Center-Client-Side">Github Client Side</a></button>

                </div>



            </div>
        </div >
    );
};

export default Projects;