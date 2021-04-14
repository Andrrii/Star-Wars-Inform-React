import React from "react"
import { StarshipList } from "../sw-components"
import { withRouter } from 'react-router-dom'
// Цк все робиться для того щоб коли користувач клікнув по списку то він попаде на нову сторінку
 
const StarshipPage = ({history}) => {
        return (
           <StarshipList onItemSelected = {(itemId) => {
               const newPath = `/starships/${itemId}`
               history.push(newPath)
           }} />
                 
        )
    }

export default withRouter(StarshipPage)
