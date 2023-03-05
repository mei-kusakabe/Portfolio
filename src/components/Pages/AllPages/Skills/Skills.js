import React from 'react';
import './Skills.css'
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact } from 'react-icons/fa';
const Skills = () => {
    return (
        <section className="resume-section p-3 p-lg-5" id="skills">
            <h2 className="mb-4">Technologies and Skills</h2>
            <div className="my-auto">
                <ul className="list-inline list-icons mb-4">
                    <li className="list-inline-item">
                        <FaHtml5></FaHtml5>
                    </li>
                    <li className="list-inline-item">
                        <FaCss3></FaCss3>
                    </li>
                    <li className="list-inline-item">
                        <FaJs></FaJs>
                    </li>
                    <li className="list-inline-item">
                        <i className="devicon-jquery-plain" title="jQuery"></i>
                    </li>

                    <li className="list-inline-item">
                        <FaBootstrap></FaBootstrap>
                    </li>

                    <li className="list-inline-item">
                        < FaReact></FaReact>
                    </li>
                </ul>

                <div id="skill-bars">
                    <p className="text-start">HTML5</p>

                    <div className="progress mb-2" >
                        <div className="progress-bar" role="progressbar" style={{ width: '95%', background: "#EB6440" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                    <p className="text-start">CSS3</p>

                    <div className="progress mb-2">
                        <div className="progress-bar" role="progressbar" style={{ width: '95%', background: "#EB6440" }} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                    <p className="text-start">JavaScript</p>

                    <div className="progress mb-2" >
                        <div className="progress-bar" role="progressbar" style={{ width: '85%', background: "#EB6440" }} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="text-start">Bootstrap</p>

                    <div className="progress mb-2" >
                        <div className="progress-bar" role="progressbar" style={{ width: '85%', background: "#EB6440" }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="text-start">ReactJS</p>
                    <div className="progress mb-2" >
                        <div className="progress-bar" role="progressbar" style={{ width: '95%', background: "#EB6440" }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                </div>
            </div>

        </section >
    );
};

export default Skills;

