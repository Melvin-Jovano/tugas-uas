import React, { Fragment } from "react";
import SpacesData from "./spacesData";
import {MdKeyboardArrowDown} from "react-icons/md";

class spacesBox extends React.Component{
    constructor(){
        super();
        this.data=[
            "Spaces you might like",
        ]
    }
    render(){
        let titles = this.data.map((title,index)=>{
            return(
                <Fragment>
                    <div className="mt-2 py-2 boxTitle">
                        {title}
                    </div>
                    <div className="d-flex flex-wrap gap-2" style={{width:720}}>
                        <SpacesData type={index}/>
                    </div>
                    <div className="viewMore" style={{color:"#d5d6d6", width:"100%", cursor:"pointer"}} onClick={this.show}>
                        <div className="d-flex justify-content-center my-2 py-2">
                            <span>View more</span>
                            <span className="ms-1"><MdKeyboardArrowDown/></span>
                        </div>
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