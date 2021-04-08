import React , {Component} from "react"
import SwapiService from "../../services/swapiService"
import ErrorBoundary from "../error-boundary"
import ItemList from "../item-list"
import ItemDetails from "../item-details"
import Row from "../row-item-list"
import "./people-page.css"


export default class PeoplePage extends Component {
    
    state = {
        selectedPerson:null
    }
    
    swapiService = new SwapiService()

    onPersonSelected = (id) => {
            this.setState({
            selectedPerson:id
                     })
        } 

    render() {
        const itemList = (
              <ItemList 
                    onItemSelected = {this.onPersonSelected}
                    getData = {this.swapiService.getAllPeople}
                >
                     {i => `${i.name} (${i.birthYear})`}
                </ItemList>
        
              ) 
        const personDetails = (
            <ErrorBoundary>
             <ItemDetails personId = {this.state.selectedPerson} />
             </ErrorBoundary>
        )
        return (
         
                <Row left = {itemList} right = {personDetails} />
       
        )
    }
}