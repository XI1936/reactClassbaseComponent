import { Component } from "react";


class Card extends Component{

    render(){
        const {cardItem}=this.props;
        const url="https://robohash.org/12?set=set2&size=450x450"
        return(
            <div className="card">
                <img src={`https://robohash.org/${cardItem.id}?set=set4&size=450x450`} className="cardImg" alt="image" />
                <h2>{cardItem.name}</h2>
                <h5>Email {cardItem.email}</h5>
                <span>{cardItem.company.catchPhrase}</span>
            </div>
        )
    }
}

export default Card;