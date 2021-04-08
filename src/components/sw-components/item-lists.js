import React from "react"
import ItemList from "../item-list"
import {withData} from "../hoc-helpers"
import SwapiService from "../../services/swapiService"

const swapiService = new SwapiService()

const {
    getAllPlanets,
    getAllPeople,
    getAllStarships
} = swapiService

const PersonList = withData(ItemList,getAllPeople)

const PlanetList = withData(ItemList,getAllPlanets)

const StarshipList = withData(ItemList,getAllStarships)

export {
    
        PersonList,
        PlanetList,
        StarshipList
            
    }