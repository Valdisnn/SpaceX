import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header'
import Home from "./components/Home/Home";
import Main from './components/Main/Main'
import Features from "./components/Features/Features";
import Calendar from "./components/Calendar/Calendar";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";

import FetchData from "./service/FetchData";

import './style.css';

class App extends React.Component {

    fetchData = new FetchData();

    state = {
        rocket: 'Falcon 1',
        rocketFeatures: null,
        rockets: [],
        company: null,
        card: null,
    };

    componentDidMount() {
        this.updateRocket();
        this.updateCompany();
        this.updateCard();
    }

    updateRocket() {
        this.fetchData.getRocket()
            .then(data => {
                this.setState({
                    rockets: data.map(item => item.name)
                });
                return data;
            })
            .then((data) => data.find((item) => item.name === this.state.rocket))
            .then((rocketFeatures) => this.setState({rocketFeatures}))
    }

    changeRocket = (rocket) => {
        this.setState({
            rocket
        }, this.updateRocket)
    };

    updateCompany() {
        this.fetchData.getCompany()
            .then((company) => this.setState({company}))
    }

    updateCard = (card) => {
        this.setState({card});
    };

    render() {
        return (
            <BrowserRouter>
                <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>

                <Route exact path='/'>
                    {this.state.company && <Home company={this.state.company}/>}
                </Route>

                <Route path='/rocket'>
                    <Main rocket={this.state.rocket}/>
                    <Features rocketFeatures={this.state.rocketFeatures} changeRocket={this.changeRocket}/>
                </Route>

                <Route path='/calendar'>
                    <Calendar updateCard={this.updateCard}/>
                </Route>

                <Route path='/details'>
                    {this.state.card && <Details {...this.state.card}/>}
                </Route>

                <Footer company={this.state.company}/>
            </BrowserRouter>
        );
    }
}

export default App;
