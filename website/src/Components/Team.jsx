import React from 'react'

const Team = ({ image, name, post }) => {
    return (
        <div className="col-12 col-sm-6 col-md-3 mx-auto my-5">
            <div className="card border-0 shadow-lg text-center">
                <img src={image} alt={image} className="profile" />
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="text-center">{name}</h5>
                        <hr />
                        <p className="text-muted">{post}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
