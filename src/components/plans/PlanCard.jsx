import React from "react";

function PlanCard(props) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.planText}</h5>
                    <h6 className="card-price text-center">{props.planPricing}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>{props.text1}</li>
                        <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>{props.text2}</li>
                        <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>{props.text3}</li>
                        <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>{props.text4}</li>
                        <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>{props.text5}</li>
                    </ul>
                    <a href="#" className="btn btn-block btn-primary text-uppercase">Choose Plan</a>
                </div>
            </div>
        </div>
    )
}

export default PlanCard;