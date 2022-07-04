import React, { Fragment } from "react";
import SpacesItem from "./spacesItem";
import { spacesTechnology } from "./data/spacesTechnology";
import { spacesYouMightLike } from "./data/spacesYouMightLike";
import { spacesSoftware } from "./data/spacesSoftware";
import { spacesDesign } from "./data/spacesDesign";
import { spacesEnglish } from "./data/spacesEnglish";

class spacesData extends React.Component{
    constructor(props){
        super(props);
        this.state = props.type === 0 ? spacesYouMightLike : props.type === 1 ? spacesTechnology : props.type === 2 ? spacesSoftware : props.type === 3 ? spacesDesign : props.type === 4 ? spacesEnglish : "";
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