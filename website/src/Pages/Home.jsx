import React from 'react'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards';
import img from "../Images/home.jpg";
import ui from "../Images/ui.svg";
import easy from "../Images/easy_code.svg";
import img1 from "../Images/img1.png"
import flex from "../Images/flex.svg";
import s1 from "../Images/1.svg";
import s2 from "../Images/2.svg";
import s3 from "../Images/3.svg";
import t1 from "../Images/t1.png";
import t2 from "../Images/t2.png";
import t3 from "../Images/t3.png";
import t4 from "../Images/t4.png";
import RightText from '../Components/RightText';
import LeftText from '../Components/LeftText';
import Team from '../Components/Team';
import Blog from './Blog';
import b1 from "../Images/b1.png";
import b2 from "../Images/b2.png";
import Pricing from '../Components/Pricing';

const Home = () => {

    return (
        <>
            <Hero boldText="Change the way you build websites With Bootsland" text="Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components." img={img} />
            <div className="container">
                <h1 className="fw-bold display-3">Our Services</h1>
                <div className="row py-5 text-center">
                    <Cards cardImg={ui} cardTitle="UI/UX Designing" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste corrupti odit ducimus unde magnam quaerat fugiat debitis, ad veritatis?" />
                    <Cards cardImg={easy} cardTitle="Documentation" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste corrupti odit ducimus unde magnam quaerat fugiat debitis, ad veritatis?" />
                    <Cards cardImg={flex} cardTitle="Flexibility" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste corrupti odit ducimus unde magnam quaerat fugiat debitis, ad veritatis?" />
                </div>
                <RightText img={img1} heading="Bootsland Crafting Creative And Beautiful Experience" text="We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam." />

            </div>
            {/* hero section ends */}
            <div className="container py-5">

                <div className="row">
                    <div className="col-12 col-sm-10 col-md-7 m-auto text-center">
                        <h2 className="fw-bold text-center">
                            Three Simple Step To Started Working Process
                    </h2>
                    </div>

                    <LeftText img={s1} heading="1) Choose Project" text="We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam." />
                    <RightText img={s2} heading="2) Start Creating" text="We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam." />
                    <LeftText img={s3} heading="3) Get Result" text="We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam." />

                </div>
            </div>
            {/* OUR SERVICES SECTION ENDS HERE */}

            <div className="container-fluid bg-theme py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-10 col-md-10 m-auto text-center">
                            <h2 className="fw-bold text-center">
                                Simple, Fair and affordable prices for all.
                         </h2>
                            <p className="fw-light fs-5">
                                All types of businesses need access to development resources, so we give you the option to decide how much you need to use.
                         </p>
                        </div>
                        <Pricing />
                        <Pricing />
                        <Pricing />

                    </div>
                </div>
            </div>
            {/* PRICING CARDS SECTION ENDS HERE */}

            <div className="container py-5">

                <div className="row">
                    <div className="col-12 col-sm-10 col-md-10 m-auto text-center">
                        <h2 className="fw-bold text-center">
                            Meet Our Team Experts
    </h2>
                        <p className="fw-light fs-5">
                            All types of businesses need access to development resources, so we give you the option to decide how much you need to use.
    </p>
                    </div>
                    <Team name="Abhinav Mane" image={t1} post="Software Developer" />
                    <Team name="Vaibhavi Mane" image={t2} post="Software Developer" />
                    <Team name="Vaibhav Mane" image={t3} post="Software Developer" />
                    <Team name="Swapnil Mane" image={t4} post="Software Developer" />
                </div>
            </div>
            {/* OUR TEAM SERCTION ENDS HERE */}

            <div className="container">

                <div className="row">
                    <div className="col-12 col-sm-10 col-md-10 m-auto text-center">
                        <h2 className="fw-bold text-center">
                            From Our Blog List Latest Feed
                        </h2>
                        <p className="fw-light fs-5">
                            All types of businesses need access to development resources, so we give you the option to decide how much you need to use.
                       </p>
                    </div>

                    <Blog img={b1} title="Bootsland Perfect Performance landing Page" desc="Businesses need access to development resources serspiciatis." />
                    <Blog img={b2} title="The most powerfull template that make you." desc="Businesses need access to development resources serspiciatis." />


                </div>
            </div>
            {/* BLOG SECTION ENDS HERE */}
        </>
    )
}

export default Home
