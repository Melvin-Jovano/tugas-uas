import React, { Fragment } from "react";
import SpacesItem from "./spacesItem";
import { spacesYouMightLike } from "./spacesYouMightLike";

class spacesCard extends React.Component{
    constructor(props){
        super(props);
        this.state = props.type === 0 ? spacesYouMightLike : "";
    }
    render(){
        let cards = this.state.map((card)=>{
            return(
                <Fragment>
                    <SpacesItem space={card}/>
                </Fragment>
            )
        });
        return(
            <Fragment>
                {cards}
            </Fragment>
        )
    }
}
export default spacesCard;