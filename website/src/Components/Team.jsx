import React from 'react'

const Team = ({ image, name, post }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 m-auto">
            <div className="card border-0 shadow-lg text-center">
                sdfasf
                <img src={image} alt={images} height="150px" className="card-img-top my-4" />
                <div className="card-body">
                    <div className="card-title">
                        <h2 className="text-center">{name}</h2>
                        <hr />
                        <p className="text-muted">{post}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
