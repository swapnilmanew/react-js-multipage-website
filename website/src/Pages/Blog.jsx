import React from 'react'
import { NavLink } from "react-router-dom";

const Blog = ({ img, title, desc }) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-6 mx-auto my-5">
                <div className="card border-0">
                    <div className="row">
                        <div className="col-6 m-auto">
                            <img src={img} alt={img} className="img-fluid" />
                        </div>
                        <div className="col-6 m-auto"> <div className="card-body">
                            <h5>
                                {title}
                            </h5>
                            <p className="text-muted">
                                {desc}
                            </p></div>
                        </div>
                        <div className="text-center">
                            <NavLink to="/" className="nav-link">Read More</NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
