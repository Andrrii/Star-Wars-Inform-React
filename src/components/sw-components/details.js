import React from "react"
import ItemDetails , {Record} from "../item-details"
import {SwapiServiceConsumer} from "../swapi-service-context"


const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {/* Юзаєм SwapiServiceConsumer для того щоб використати swapiService */}
            {
                ({getPerson,getPersonImage}) => {
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
            }
        </SwapiServiceConsumer>
    )
} 

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
        {/* Юзаєм SwapiServiceConsumer для того щоб використати swapiService */}
        {
              ({getPlanet,getPlanetImage}) => {
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
        }
      </SwapiServiceConsumer>
    )
}

const StarshipDetails = ({itemId}) => {

    return (
        <SwapiServiceConsumer>
        {/* Юзаєм SwapiServiceConsumer для того щоб використати swapiService */}
        {
            ({getStarship,getStarshipImage}) => {
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
        }
        </SwapiServiceConsumer>
    )
}

export {
    
        PersonDetails,
        PlanetDetails,
        StarshipDetails
            
    }