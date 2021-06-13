import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarTitle from "./components/Top&Bottom/Navbar";
import RegisterFinal from "./components/register/RegisterFinal";
import LoginFinal from "./components/login/LoginFinal";
import ContactFinal from "./components/contact/ContactFinal";
import AboutFinal from "./components/about/AboutFinal";
import SurveyFinal from "./components/surveyform/SurveyFinal";
import PlansFinal from "./components/plans/Plansfinal";
import IntroFinal from "./components/intro/IntroFinal";

function App() {
    return (
        <React.StrictMode>
            <Router>
                {/* The navigation bar appears on the top of every page that is rendered */}
                <NavbarTitle />
                {/* <Route path="/" component={IntroFinal} /> */}
                <Switch>    
                    <Route exact path="/" component={IntroFinal} />
                    <Route path="/register" component={RegisterFinal} />
                    <Route path="/login" component={LoginFinal} />
                    <Route path="/contact" component={ContactFinal} />
                    <Route path="/about" component={AboutFinal} />
                    <Route path="/survey" component={SurveyFinal} />
                    <Route path="/plans" component={PlansFinal} />
                </Switch>
            </Router>
        </React.StrictMode>
    )
}

export default App;