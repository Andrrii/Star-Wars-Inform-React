import React from "react"
import ItemDetails , {Record} from "../item-details"
import SwapiService from "../../services/swapiService"

const swapiService = new SwapiService()
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getStarshipImage,
    getPlanetImage
   } = swapiService

const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails itemId = {itemId}
            getData = {getPerson}
            getImageUrl = {getPersonImage}
        >
                <Record field = "gender" label = "Gender" />
                <Record field = "birthYear" label = "Birth Year" />
                <Record field = "eyeColor" label = "Eye Color" />
        </ItemDetails>
    )
} 

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails itemId = {itemId}
                   getData = {getPlanet}
                   getImageUrl = {getPlanetImage}
        >
          <Record field = "population" label = "Population" />
          <Record field = "rotationPeriod" label = "Rotation period" />
          <Record field = "diameter" label = "Diametr" />
      </ItemDetails>
    )
}

const StarshipDetails = ({itemId}) => {

    return (
        <ItemDetails itemId = {itemId}
                   getData = {getStarship}
                   getImageUrl = {getStarshipImage}
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
}

export {
    
        PersonDetails,
        PlanetDetails,
        StarshipDetails
            
    }