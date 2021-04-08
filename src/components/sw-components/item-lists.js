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

/* Робиться для того щоб в App замінити    <PersonList>
            { ({name}) => <span>{name}</span> }
            </PersonList>  */
const withChildFunction = (Wrapper,fn) => 
    {
        return (props) => {
            return ( 
                <Wrapper {...props} >
                    {fn}
                </Wrapper>
                )
        }
    } 

const ListWithChildren = withChildFunction(ItemList,
    ({name}) => <span>{name}</span>
    )

const PersonList = withData(ListWithChildren,getAllPeople)

const PlanetList = withData(ListWithChildren,getAllPlanets)

const StarshipList = withData(ListWithChildren,getAllStarships)

export {
    
        PersonList,
        PlanetList,
        StarshipList
            
    }