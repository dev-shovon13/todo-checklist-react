import React from 'react';
import img from '../../images/404.png'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="text-center">
            <img src={img} alt="" className="not-found" />
        </div>
    );
};

export default NotFound;