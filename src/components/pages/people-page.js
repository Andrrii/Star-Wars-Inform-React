import React, { Component } from "react"
import Row from "../row-item-list"
import { PersonDetails, PersonList } from "../sw-components"
import { withRouter } from 'react-router-dom'


const PeoplePage = ({history,match}) => {
        return (
            <Row left = { <PersonList onItemSelected = { (id) => history.push( `/people/${id}`)} />}
                 right = { <PersonDetails itemId = {match.params.id} />} />
        )
}

export default withRouter(PeoplePage)