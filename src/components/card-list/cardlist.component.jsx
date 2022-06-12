import { Component } from "react";
import Card from "../card/card.component"
class CardList extends Component{

    render(){
        const {cardList}=this.props;
        return (
            <div className="ClassListContainer">
            {cardList.map(cat=> (
                <Card key={cat.id} cardItem={cat}/>))}
            </div>
        )
    }

}

export default CardList;