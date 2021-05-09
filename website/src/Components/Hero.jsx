import React from 'react'
import Navbar from './Navbar'

const Hero = ({ img, text }) => {

    return (
        <div className="hero-bg" style={{ backgroundImage: "url(" + img + ")" }}>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-12 m-auto">
                        <h1 className="fw-bold display-2 text-white text-center m-auto">{text}</h1>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,288L160,288L320,224L480,64L640,288L800,192L960,288L1120,256L1280,224L1440,64L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"></path></svg>
        </div>
    )
}

export default Hero
