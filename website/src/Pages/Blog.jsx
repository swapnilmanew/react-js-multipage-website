import React from 'react'
import { NavLink } from "react-router-dom";

const Blog = ({ img, title, desc }) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-6 m-auto">
                <div className="card border-0">
                    <div className="card-body">
                        <h2 className="fw-bold">
                            {title}
                        </h2>
                        <p className="text-muted">
                            {desc}
                        </p>
                        <NavLink to="/" className="nav-link">Read More</NavLink>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
