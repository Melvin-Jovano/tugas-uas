import React, { Fragment } from "react";
import SpacesBox from "./spacesBox";

class spacesTitle extends React.Component{
    constructor(){
        super();
        this.data=[
            "Spaces you might like",
            "Technology"
        ]
    }
    render(){
        let titles = this.data.map((title, index)=>{
            return(
                <Fragment>
                    <SpacesBox title={title} index={index}/>
                </Fragment>
            )
        });
        return(
            <Fragment>
                {titles}
            </Fragment>
        )
    }
}
export default spacesTitle;