import React, { Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import {CgAdd} from "react-icons/cg";
import {IoCompassOutline} from "react-icons/io5";
import {FiMail} from "react-icons/fi";
import {MdClose} from "react-icons/md";
import SpacesTitle from "./spacesTitle";
import "./Spaces.css";

class spaces extends React.Component{
    constructor(){
        super();
        this.scroll = React.createRef();
    }
    handleScrollClick = ()=>{
        this.scroll.current.scrollIntoView({behavior:"smooth"})
    }
    render(){
        return(
            <Fragment>
                <div className="modal fade" id="createSpaceModal" tabIndex="-1" role="dialog" aria-labelledby="createSpaceLabel" aria-hidden="true" data-backdrop="static">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header py-2 ps-1 pe-2 border-0">
                                <button type="button" className="close rounded-circle position-relative bg-transparent border-0" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="closeIcon position-absolute"><MdClose/></span>
                                </button>
                            </div>
                            <div className="modal-body p-0">
                                <div className="pb-2 px-3 modalTitle">
                                    <div className="fw-bold" style={{fontSize:18, color:"rgb(213,214,214)"}}>Create a Space</div>
                                    <div className="mt-1" style={{color:"#b1b3b6", fontSize:15}}>
                                        Share your interests, curate content, host discussions, and more.
                                    </div>
                                </div>
                                <div className="modalBody">
                                    <form action="#" method="POST">
                                        <div className="px-3">
                                            <div className="pb-2">
                                                <div style={{color:"#d5d6d6"}}>
                                                    Name
                                                    <span style={{color:"#f52936"}}>*</span>
                                                </div>
                                                <div style={{color:"#b1b3b6", fontSize:12}}>
                                                    This can be changed in Space settings.
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-transparent rounded modalInput" value="Altair's Space"/>
                                            </div>
                                            <div className="mt-2" style={{fontSize:13, color:"#328f5a"}}>
                                                This name is available.
                                            </div>
                                            <div style={{marginTop:16}}>
                                                <div className="py-2">
                                                    <div style={{color:"#d5d6d6", fontWeight:"500", fontSize:15}}>Brief description</div>
                                                    <div style={{color:"#b1b3b6", fontSize:12}}>Include a few keywords to show people what to expect if they join.</div>
                                                </div>
                                                <div className="input-group">
                                                    <input type="text" className="form-control bg-transparent rounded modalInput"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer border-0 mt-5 px-3 py-2">
                                            <button type="submit" className="btn btn-primary rounded-pill px-3 m-0 createButton">Create</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar activeIndex={4}/>
                <div className="container px-4 pb-4" style={{paddingTop:30, width:1050}}>
                    <div className="d-flex">
                        <div className="content" style={{width:720}}>
                            <div className="welcomeSpace rounded-3">
                                <div style={{padding:16}}>
                                    <div style={{paddingRight:350, marginBottom:16}}>
                                        <span className="mb-1 welcomeTitle">Welcome to Spaces!</span>
                                        <br />
                                        <span className="welcomeText">Follow Spaces to explore your interests on Quora.</span>
                                    </div>
                                    <div className="d-flex">
                                        <button className="bg-transparent rounded-pill welcomeButton me-2" type="button" data-toggle="modal" data-target="#createSpaceModal">
                                            <div className="d-flex align-items-center">
                                                <CgAdd style={{fontSize:20}}/>
                                                <div className="ms-1" style={{fontSize:13, fontWeight:"500"}}>Create a Space</div>
                                            </div>
                                        </button>
                                        <button className="bg-transparent rounded-pill welcomeButton" onClick={this.handleScrollClick}>
                                            <div className="d-flex align-items-center">
                                                <IoCompassOutline style={{fontSize:20}}/>
                                                <div className="ms-1" style={{fontSize:13, fontWeight:"500"}}>Discover Spaces</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 discoverSpaces" ref={this.scroll}>
                                <span className="fw-bold" style={{color:"#cdcdcd", fontSize:"21px"}}>Discover Spaces</span>
                            </div>
                            <SpacesTitle/>
                        </div>
                        <div style={{marginLeft:30}}>
                            <div className="rounded-3" style={{fontSize:15, backgroundColor:"#262626", width:260, opacity:"0.6"}}>
                                <div className="px-3 py-2 invitesTitle">
                                    Pending Invites
                                </div>
                                <div className="d-flex px-2 py-1 justify-content-center">
                                    <div className="text-center py-4" style={{color:"#8e9092"}}>
                                        <FiMail className="mb-2" style={{fontSize:20}}/>
                                        <div style={{fontSize:13}}>No invites</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default spaces;