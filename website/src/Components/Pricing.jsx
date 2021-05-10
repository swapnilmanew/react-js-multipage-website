import React from 'react'

const Pricing = ({ amt, type }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 mx-auto my-5">
            <div className="card border-0 p-3">
                <div className="header text-center">
                    <h4 className="fw-bold">{type}</h4>
                    <span><sub>$</sub> <span className="display-1 fw-bold text-primary">{amt}</span> /mo</span>
                </div>
                <div className="card-body">
                    <p>Responsive landing pages</p>
                    <p>Free Custom Domain</p>
                    <p>Flexible, simple license</p>
                    <p>Monthly updates</p>
                    <p>Outstanding Support</p>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
    )
}

export default Pricing
