import React, { Fragment } from "react";
import SpacesData from "./spacesData";
import {MdKeyboardArrowDown} from "react-icons/md";
import { spacesYouMightLike } from "./data/spacesYouMightLike";
import { spacesTechnology } from "./data/spacesTechnology";
import { spacesSoftware } from "./data/spacesSoftware";
import { spacesDesign } from "./data/spacesDesign";
import { spacesEnglish } from "./data/spacesEnglish";

class spacesBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            batas : 7,
            title : this.props.title,
            index : this.props.index,
        }
        this.item = this.state.index === 0 ? spacesYouMightLike : this.state.index === 1 ? spacesTechnology : this.state.index === 2 ? spacesSoftware : this.state.index === 3 ? spacesDesign : this.state.index === 4 ? spacesEnglish : "";
        this.len = this.item.length
        this.show = this.show.bind(this)
    }
    show(){
        this.setState({batas : this.state.batas + 8})
    }
    render(){
        return(
            <Fragment>
                <div className="mb-3">
                    <div className="mt-2 py-2 boxTitle">
                        {this.state.title}
                    </div>
                    <div className="d-flex flex-wrap" style={{width:720}}>
                        <SpacesData type={this.state.index} batas={this.state.batas}/>
                    </div>
                    <div className={this.state.batas + 1 >= this.len? "d-none" : "viewMore"} style={{color:"#d5d6d6", width:"100%", cursor:"pointer"}} onClick={this.show}>
                        <div className="d-flex justify-content-center my-2 py-2">
                            <span>View more</span>
                            <span className="ms-1"><MdKeyboardArrowDown/></span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default spacesBox;