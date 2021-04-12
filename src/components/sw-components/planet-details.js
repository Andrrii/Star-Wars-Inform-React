import React from "react"
import { withSwapiService } from "../hoc-helpers"
import ItemDetails , {Record} from "../item-details"

const PlanetDetails = ({itemId,getData,getImageUrl}) => {
    return (
            <ItemDetails itemId = {itemId}
                    getData = {getData}
                    getImageUrl = {getImageUrl}
            >
                <Record field = "population" label = "Population" />
                <Record field = "rotationPeriod" label = "Rotation period" />
                <Record field = "diameter" label = "Diametr" />
            </ItemDetails>
        )
        
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl:swapiService.getPlanetImage
    }
}


export default withSwapiService(mapMethodsToProps)(PlanetDetails)            