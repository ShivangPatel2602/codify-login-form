import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarTitle from "./components/Navbar";
import RegisterFinal from "./components/register/RegisterFinal";
import LoginFinal from "./components/login/LoginFinal";
import ContactFinal from "./components/contact/ContactFinal";
import AboutFinal from "./components/about/AboutFinal";
import SurveyFinal from "./components/surveyform/SurveyFinal";

function App() {
    return (
        <React.StrictMode>
            <Router>
                <NavbarTitle />
                <Switch>
                    <Route path="/register" component={RegisterFinal} />
                    <Route path="/login" component={LoginFinal} />
                    <Route path="/contact" component={ContactFinal} />
                    <Route path="/about" component={AboutFinal} />
                    <Route path="/survey" component={SurveyFinal} />
                </Switch>
            </Router>
        </React.StrictMode>
    )
}

export default App;