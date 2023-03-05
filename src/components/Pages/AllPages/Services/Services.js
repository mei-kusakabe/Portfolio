import React from 'react';
import './Services.css'
import service1 from './../../../../assets/Services/front.jpg'
import service2 from './../../../../assets/Services/react.jpg'
import service3 from './../../../../assets/Services/full.jpg'

const Services = () => {
    return (
        <div>
            <h2>Services</h2>
            <div className='service-all  border-0'>

                <div className='service m-5 teal-c text-center border-1 p-0 w-75 shadow'>
                    <img src={service1} className='w-100' alt="" />

                    <h5 className='p-3 w-100 title-font cap'>Front-End Development </h5>
                </div>
                <div className='service m-5 teal-c text-center border-1 p-0 w-75 shadow'>
                    <img src={service2} className='w-100' alt="" />
                    <h5 className='p-3 w-100 title-font cap'>React Js Development</h5>
                </div>
                <div className='service m-5 teal-c text-center border-1 p-0 w-75 shadow'>
                    <img src={service3} className='w-100' alt="" />
                    <h5 className='p-3 w-100 title-font cap'>Full-Stack Development</h5>
                </div>
            </div>
        </div>

    );
};

export default Services;