import React, { Fragment } from "react";
import SpacesItem from "./spacesItem";
import { spacesTechnology } from "./spacesTechnology";
import { spacesYouMightLike } from "./spacesYouMightLike";

class spacesData extends React.Component{
    constructor(props){
        super(props);
        this.state = props.type === 0 ? spacesYouMightLike : props.type === 1 ? spacesTechnology : "";
    }
    render(){
        let datas = this.state.map((data, index)=>{
            return(
                <Fragment>
                    <SpacesItem space={data} urut={index} batas={this.props.batas}/>
                </Fragment>
            )
        });
        return(
            <Fragment>
                {datas}
            </Fragment>
        )
    }
}
export default spacesData;