import React from 'react'

const Cards = ({ cardText, cardTitle, img }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 m-auto">
            <div className="card border-0 shadow">
                <div className="card-body">
                    <img src="" alt="" className="card-img-top" />
                    <div className="card-title">
                        <h2 className="fw-bold text-center">{cardTitle}</h2>
                        <hr />
                        <p>{cardText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
