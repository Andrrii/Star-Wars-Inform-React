
import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import ItemDetails ,{ Record } from '../item-details';
import SwapiService from "../../services/swapiService"
import DummySwapiService from "../../services/dummy-swapi-service"
import {SwapiServiceProovider} from "../swapi-service-context"
import './app.css';
import Row from '../row-item-list';
import {PeoplePage,PlanetPage,StarshipPage,LoginPage,SecretPage} from "../pages"
import { PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList } from '../sw-components';
import ErrorBoundary from '../error-boundary';

import {HashRouter as Router, Route,Switch, Redirect} from 'react-router-dom'
export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError : false,
    swapiService : new SwapiService(),
    isLoggedIn:false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn:true
    })
  }

  onServiceChange = () => {
    this.setState(({swapiService}) => {
        const Service = swapiService instanceof SwapiService ?  DummySwapiService : SwapiService
        return {
          swapiService : new Service ()
        }
    })
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  componentDidCatch() {
    this.setState({
      hasError:true
    })
  }

  render() {

    const {isLoggedIn} = this.state

    if(this.state.hasError){
          return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    const personDetails = (
      <ItemDetails itemId = {11}
                   getData = {this.state.swapiService.getPerson}
                   getImageUrl = {this.state.swapiService.getPersonImage}
      >
          <Record field = "gender" label = "Gender" />
          <Record field = "birthYear" label = "Birth Year" />
          <Record field = "eyeColor" label = "Eye Color" />
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails itemId = {13}
                   getData = {this.state.swapiService.getStarship}
                   getImageUrl = {this.state.swapiService.getStarshipImage}
      >
          <Record field = "model" label = "Model" />
          <Record field = "manufacturer" label = "Manufacturer" />
          <Record field = "costInCredits" label = "Cost in Credits" />
          <Record field = "length" label = "Length" />
          <Record field = "crew" label = "Crew" />
          <Record field = "passengers" label = "Passengers" />
          <Record field = "cargoCapacity" label = "Cargo capacity" />
      </ItemDetails>
    )

    return (
      <ErrorBoundary >
        {/* Використовуєм SwapiServiceProovider для того щоб наші значення були доступні по всій App  */}
        <SwapiServiceProovider value = {this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange = {this.onServiceChange} />
            
              {/* <Row left = {personDetails} right = {starshipDetails} /> */}
            
          { planet }

              <button
                className="toggle-planetbtn btn btn-outline-primary"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>

              <Switch>

                {/* Switch обробляє неіснуючі адреси */}

                <Route path ='/' render = { () => <h2>Welcome to Star-Wars-Inform</h2>} 
                  exact   /> {/* Exact - викор для того , щоб цей компонент відображався тільки на цій сторінці  */}
                <Route path = "/people/:id?" component = {PeoplePage} />
                <Route path = "/planets" component = {PlanetPage} />
                <Route path = "/starships" exact component = {StarshipPage} />
                {/* Для динамічних силок */}
                <Route path = '/starships/:id' render = {({match,location,history}) => {
                    const {id} = match.params
                    return <StarshipDetails itemId = {id}/>
                    }} />
                
                <Route path = '/login' render = {() => (<LoginPage 
                isLoggedIn = {isLoggedIn} onLogin ={this.onLogin} />)} />
                <Route path = '/secret' render = {() => (<SecretPage 
                isLoggedIn = {isLoggedIn} />)} />

                {/* Якщо не буде якогось шляху то виконається Redirect */}

                <Redirect to = "/" />
              </Switch>

            </div>
          </Router>
        </SwapiServiceProovider>
      </ErrorBoundary>
    );
  }
}