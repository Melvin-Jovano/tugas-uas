import React, { Fragment } from "react";
import SpacesCard from "./spacesCard";

class spacesBox extends React.Component{
    constructor(){
        super();
        this.state=[
            "Spaces you might like",
        ];
    }
    render(){
        let titles = this.state.map((title,index)=>{
            return(
                <Fragment>
                    <div className="mt-2 py-2 boxTitle">
                        {title}
                    </div>
                    <div className="d-flex flex-wrap">
                        <SpacesCard type={index}/>
                    </div>
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
export default spacesBox;