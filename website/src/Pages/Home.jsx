import React from 'react'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards';
import img from "../Images/home.jpg";
import ui from "../Images/ui.svg";
import easy from "../Images/easy_code.svg";
import img1 from "../Images/img1.png"
import flex from "../Images/flex.svg";
import RightText from '../Components/RightText';

const Home = () => {

    return (
        <>
            <Hero boldText="Change the way you build websites With Bootsland" text="Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components." img={img} />
            <div className="container">                <h1 className="fw-bold display-3">Our Services</h1>
                <div className="row py-5 text-center">
                    <Cards cardImg={ui} cardTitle="UI/UX Designing" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste corrupti odit ducimus unde magnam quaerat fugiat debitis, ad veritatis?" />
                    <Cards cardImg={easy} cardTitle="Documentation" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste corrupti odit ducimus unde magnam quaerat fugiat debitis, ad veritatis?" />
                    <Cards cardImg={flex} cardTitle="Flexibility" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste corrupti odit ducimus unde magnam quaerat fugiat debitis, ad veritatis?" />
                </div>
                <RightText img={img1} />
            </div>
        </>
    )
}

export default Home
