import React, { Fragment } from "react";
import SpacesItem from "./spacesItem";
import { spacesYouMightLike } from "./spacesYouMightLike";

class spacesData extends React.Component{
    constructor(props){
        super(props);
        this.state = props.type === 0 ? spacesYouMightLike : "";
    }
    render(){
        let datas = this.state.map((data, index)=>{
            return(
                <Fragment>
                    <SpacesItem space={data} urut={index}/>
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