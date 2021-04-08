import React, { Component } from 'react' 
import SwapiService from "../../services/swapiService"
import Spinner from "../spinner"
import './item-details.css'

export const Record = ({item,field,label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}


export default class ItemDetails extends Component {

  swapiService = new SwapiService()

  state = {
    item : {},
    loading:true,
    image : null
  }

  componentDidMount(){
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ) {
      this.setState({loading:true})
      this.updateItem()
    }
  }

  updateItem () {
    const {itemId , getData,getImageUrl} = this.props
    if (!itemId) {
      return
    }

    getData(itemId)
          .then((item) => {
            this.setState({
              item,
              loading:false,
              image:getImageUrl(item)
            })
          } )
  }


  render() {

    if(!this.state.item || !this.props.itemId) {
      return <span> Select a person from a list </span>
    }

    const {item,loading,image} = this.state
    const {
      id,name,gender,birthYear,eyeColor
    } = item
    if(loading){
      return (
        <div className="person-details card">
          <Spinner />
        </div>
      )
    }
    return (
      <div className="person-details card">
        <img alt = "person-img" className="person-image" src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {/* тут буде Record,фле шоб передати в нього значення потрібно юзати  React.Children.map */} 
            {
              React.Children.map(this.props.children, (child) => {
                /* Другий аргумент функції  cloneElement додає властивості */
                return React.cloneElement(child,{item})
              })
            } 
          </ul>
        </div>
      </div>
    )
  }
}


