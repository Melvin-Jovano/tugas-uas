import React, { Fragment } from "react";
import SpacesData from "./spacesData";
import {MdKeyboardArrowDown} from "react-icons/md";

class spacesBox extends React.Component{
    constructor(props){
        super(props);
        this.data={
            title : this.props.title,
            index : this.props.index
        }
        this.state = {
            batas : 7
        }
        this.show = this.show.bind(this)
    }
    show(){
        this.setState({batas : this.state.batas + 8})
    }
    render(){
        return(
            <Fragment>
                <div className="mt-2 py-2 boxTitle">
                    {this.data.title}
                </div>
                <div className="d-flex flex-wrap gap-2" style={{width:720}}>
                    <SpacesData type={this.data.index} batas={this.state.batas}/>
                </div>
                <div className="viewMore" style={{color:"#d5d6d6", width:"100%", cursor:"pointer"}} onClick={this.show}>
                    <div className="d-flex justify-content-center my-2 py-2">
                        <span>View more</span>
                        <span className="ms-1"><MdKeyboardArrowDown/></span>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default spacesBox;