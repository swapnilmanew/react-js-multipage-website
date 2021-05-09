import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div class="hero-bg">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-12 m-auto">
                        <h1 className="fw-bold display-2 text-center m-auto">Hero Section</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
