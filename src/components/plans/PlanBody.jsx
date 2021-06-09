import React from "react";
import PlanCard from "./PlanCard";

function Plans2() {
    return (
        <section className="pricing py-5">
            <h1>PLANS</h1>
            <div className="container">
                <div className="row">

                    <PlanCard planText="Free" planPricing="$0" planDuration="/month" 
                        text1="Single User"
                        text2="5 ideas for Web Dev Project"
                        text3="Web Dev course FREE"
                        text4="2 sessions with our mentors FREE"
                        text5="2 courses of your choice FREE for trial duration"
                    />

                    <PlanCard planText="Basic" planPricing="$50" planDuration="/month" 
                        text1="Single User"
                        text2="10 ideas for Web Dev, ML Project"
                        text3="Web Dev, ML course FREE"
                        text4="7 sessions with our mentors FREE"
                        text5="5 courses of your choice FREE"
                    />
                    
                    <PlanCard planText="Pro" planPricing="$120" planDuration="/month" 
                        text1="4 User"
                        text2="7 ideas for any CS domain projects"
                        text3="All couses - 15% their actual value"
                        text4="All sessions with our mentors - at $10"
                        text5="Interaction with people from large MNCs"
                    />
                </div>
            </div>
        </section>
    )
}

export default Plans2;