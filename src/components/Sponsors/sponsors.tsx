import React from 'react';
import images from "../images/images";
const Sponsors = () => {
    return (
        <div className=''>
            <div className='sponsor_wrapper'>
                <div className='sponsor'><img src={images.blueSky} alt="Sponsor" /></div>
                <div className='sponsor'><img src={images.forever} alt="Sponsor" /></div>
                <div className='sponsor'><img src={images.nival} alt="Sponsor" /></div>
                <div className='sponsor'><img src={images.fedex} alt="Sponsor" /></div>
                <div className='sponsor'><img src={images.carwarry} alt="Sponsor" /></div>
            </div>
            
        </div>
    );
};

export default Sponsors;