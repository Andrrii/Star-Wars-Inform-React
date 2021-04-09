import React from "react"
import ItemDetails , {Record} from "../item-details"
import {withSwapiService} from "../hoc-helpers"

const PersonDetails = ({itemId,getData,getImageUrl}) => {
    return (
            <ItemDetails itemId = {itemId}
                getData = {getData}
                getImageUrl = {getImageUrl}
            >
                <Record field = "gender" label = "Gender" />
                <Record field = "birthYear" label = "Birth Year" />
                <Record field = "eyeColor" label = "Eye Color" />
            </ItemDetails>
    )
}


const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl:swapiService.getPersonImage
    }
}

// withSwapiService додає SwapiService в компонент

export default withSwapiService(PersonDetails,mapMethodsToProps)
            


