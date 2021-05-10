import React from 'react'
import Navbar from './Navbar'

const Hero = ({ boldText, img, text }) => {

    return (
        <div className="hero-bg" style={{ backgroundImage: "url(" + img + ")" }}>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-10 m-auto">
                        <div className=" content">
                            <h1 className="fw-bold display-2 text-white text-center m-auto">{boldText}</h1>
                            <p className="text-white">{text}</p>
                            <div className="text-center">
                                <button className="btn btn-primary btn-lg">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,288L120,266.7C240,245,480,203,720,197.3C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>
    )
}

export default Hero
