import React from 'react';
import { FaFacebook, FaGithub, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (

        <section className="footer-sec container-fluid mt-5">
            <footer className="bg-dark text-center ">
                <div className="container-fluid py-5">
                    <div className="mt-5 text-white">
                        <h6 className=""><small>Copyright © 2022 - All right reserved by Jafrin Iqbal Chowdhury</small></h6>

                        <p className="h6"><small>Chattogram, Bangladesh</small></p>
                    </div>
                    <div className="mb-5">
                        <a className="btn btn-dark shadow-lg bg-dark bg-gradient rounded-5 px-3 fs-4 fw-bold" href="https://www.facebook.com/profile.php?id=100053900385995" role="button">
                            <FaFacebook></FaFacebook></a>
                        <a className="btn btn-dark shadow-lg bg-dark bg-gradient rounded-5 px-3 fs-4 fw-bold"
                            href="
                            https://www.linkedin.com/in/jafrin-iqbal-chowdhury-6b8345209/" role="button"><FaLinkedinIn></FaLinkedinIn></a>
                        <a className="btn btn-dark shadow-lg bg-dark bg-gradient rounded-5 px-3 fs-4 fw-bold"
                            href="https://github.com/mei-kusakabe" role="button"><FaGithub></FaGithub></a>
                    </div>

                </div>
            </footer>
        </section>
    );
};

export default Footer;