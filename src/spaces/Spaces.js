import React, { Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import {CgAdd} from "react-icons/cg";
import {IoCompassOutline} from "react-icons/io5";
import SpacesBox from "./spacesBox";
import "./Spaces.css";

class spaces extends React.Component{
    render(){
        return(
            <Fragment>
                <Navbar activeIndex={4}/>
                <div className="container px-4 pb-4" style={{paddingTop:30, width:1050}}>
                    <div className="d-flex">
                        <div className="content" style={{width:720}}>
                            <div className="welcomeSpace">
                                <div style={{padding:16}}>
                                    <div style={{paddingRight:350, marginBottom:16}}>
                                        <span className="mb-1 welcomeTitle">Welcome to Spaces!</span>
                                        <br />
                                        <span className="welcomeText">Follow Spaces to explore your interests on Quora.</span>
                                    </div>
                                    <div className="d-flex">
                                        <button className="bg-transparent rounded-pill welcomeButton me-2">
                                            <div className="d-flex align-items-center">
                                                <CgAdd style={{fontSize:20}}/>
                                                <div className="ms-1" style={{fontSize:13, fontWeight:"500"}}>Create a Space</div>
                                            </div>
                                        </button>
                                        <button className="bg-transparent rounded-pill welcomeButton">
                                            <div className="d-flex align-items-center">
                                                <IoCompassOutline style={{fontSize:20}}/>
                                                <div className="ms-1" style={{fontSize:13, fontWeight:"500"}}>Discover Spaces</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className="fw-bold" style={{color:"#cdcdcd", fontSize:"21px"}}>Discover Spaces</span>
                            </div>
                            <SpacesBox/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default spaces;