import React from "react"
import { withSwapiService } from "../hoc-helpers"
import ItemDetails , {Record} from "../item-details"

const StarshipDetails = ({itemId,getData,getImageUrl}) => {

    return (
   
        <ItemDetails itemId = {itemId}
                getData = {getData}
                getImageUrl = {getImageUrl}
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

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl:swapiService.getStarshipImage
    }
}


export default withSwapiService(mapMethodsToProps)(StarshipDetails)