
import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import ItemList from '../item-list';
import ItemDetails ,{ Record } from '../item-details';
import SwapiService from "../../services/swapiService"
import {SwapiServiceProovider} from "../swapi-service-context"
import './app.css';
import Row from '../row-item-list';
import { PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList } from '../sw-components';
import ErrorBoundary from '../error-boundary';
export default class App extends Component {

  state = {
    showRandomPlanet: true,
      hasError :false
  };

  swapiService = new SwapiService()

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

    if(this.state.hasError){
          return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    const personDetails = (
      <ItemDetails itemId = {11}
                   getData = {this.swapiService.getPerson}
                   getImageUrl = {this.swapiService.getPersonImage}
      >
          <Record field = "gender" label = "Gender" />
          <Record field = "birthYear" label = "Birth Year" />
          <Record field = "eyeColor" label = "Eye Color" />
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails itemId = {13}
                   getData = {this.swapiService.getStarship}
                   getImageUrl = {this.swapiService.getStarshipImage}
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
        <SwapiServiceProovider value = {this.swapiService}>
          <div className="stardb-app">
            <Header />
          
            {/* <Row left = {personDetails} right = {starshipDetails} /> */}
          
        { planet }

            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>

            {/* < PeoplePage />  */}

            <PersonDetails itemId = {4} />
            <PlanetDetails itemId = {8} />
            <StarshipDetails itemId = {9} />

            <PersonList />

            <StarshipList />

            <PlanetList />

          </div>
        </SwapiServiceProovider>
      </ErrorBoundary>
    );
  }
}