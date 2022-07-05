import React, { Fragment } from "react";
import {RiShareForwardLine} from "react-icons/ri";

class SpacesItem extends React.Component{
    constructor(props){
        super(props);
        this.data = {
            cover : this.props.space.cover,
            icon : this.props.space.icon,
            title : this.props.space.title,
            description : this.props.space.description,
            profiles : this.props.space.profile,
            name : this.props.space.name,
            contributors : this.props.space.contributors,
            follow : this.props.space.follow,
            urut : this.props.urut
        }
        this.state = {
            isHover : false,
        }
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }
    handleMouseOver(){
        this.setState({isHover : true})
    }
    handleMouseOut(){
        this.setState({isHover : false})
    }
    render(){
        let popUp = 
        <div className="popItem position-absolute">
            <img src={this.data.cover} className="popItemCover" alt=""/>
            <div className="pt-2 pb-1" style={{padding:"0 16px"}}>
                <div className="d-flex">
                    <div className="popItemIconWrap position-relative flex-grow-1">
                        <img src={this.data.icon} alt="" className="popItemIcon position-absolute" style={{color:"#262626"}}/>
                        <div className="popItemIconOverlay position-absolute"></div>
                    </div>
                    <div className="text-start" style={{width:148}}>
                        <span className="fw-bold popItemTitle" style={{fontSize:18, color:"#cdcdcd", cursor:"pointer"}}>
                            {this.data.title}
                        </span>
                        <div className="fw-normal" style={{color:"#b1b3b6", fontSize:13, cursor:"text"}}>{this.data.description}</div>
                    </div>
                </div>
                <div className="d-flex mt-4 align-items-center">
                    <div className="d-flex">
                        {this.data.profiles.map((profile)=>{
                            return(
                                <img src={profile} alt="" style={{width:16, height:16, cursor:"pointer"}} className={profile === null? "d-none" : "rounded-circle"}/>
                            )
                        })}
                    </div>
                    <div className={this.data.contributors === 0? (this.data.name === null? "d-none" : "ms-1 fw-normal text-start" ) : "ms-1 fw-normal text-start"} style={{color:"#8e9092", fontSize:13}}>
                        <span className="popItemName" style={{cursor:"pointer"}}>{this.data.name}</span> {this.data.contributors === 0? "is" : "and"} {this.data.contributors === 0 ? "" : (this.data.contributors)} {this.data.contributors > 0 ? "more are contributors" : "a contributor"}
                    </div>
                </div>
                <div className="mt-2" style={{borderTop:"solid 1px", borderColor:"#393839", padding:"0 16px", margin:"0 -16px"}}>
                    <div className="d-flex align-items-center justify-content-between mt-1" style={{color:"#b1b3b6", padding:"2px 0"}}>
                        <button className="bg-transparent rounded-pill followButton" style={{border:0}}>
                            <div className="d-flex" style={{color:"#b1b3b6"}}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 19.5h-6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v6M8 12.5v-4h4v4H8zM14.5 9H16h-1.5zm0 3H16h-1.5zM8 15.5h8-8zm9 4h5M19.5 17v5" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style={{stroke:"rgb(72,148, 253)"}}></path>
                                </svg>
                                <div className="d-flex align-items-center ms-1" style={{fontSize:13, fontWeight:"500"}}>
                                    <div className="me-1">Follow</div>
                                    <div className={this.data.follow === null ? "d-none" : ""}>·</div>
                                </div>
                                <div className={this.data.follow === null? "d-none":"d-flex align-items-center ms-1"} style={{fontSize:13}}>
                                    {this.data.follow}
                                </div>
                            </div>
                        </button>
                        <div className="d-flex">
                            <button type="button" title="More sharing options" className="popIcon rounded-circle position-relative bg-transparent border-0" style={{padding:"0 5px", width:30, height: 30}}>
                                <RiShareForwardLine style={{fontSize:20, color:"#b1b3b6"}} className="position-absolute shareIcon" />
                            </button>
                            <button type="button" title="More" className="popIcon rounded-circle position-relative bg-transparent border-0" style={{padding:"0 5px", width:30, height: 30}}>
                                <svg width="24" height="24"xmlns="http://www.w3.org/2000/svg" className="position-absolute dotsIcon" >
                                    <path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" class="icon_svg-stroke" stroke-width="1.5" stroke="#666" fill="none" style={{stroke:"#b1b3b6"}}></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        return(
            <Fragment>
                <div>
                    <li className={this.data.urut > (this.props.batas) ? "d-none" : "mb-2 me-2 list-unstyled spacesItem"} style={{width:171.5, height:236, cursor:"pointer"}}>
                        <div className="d-flex flex-column">
                            <img className="spacesItemCover" src={this.data.cover} alt="" height={50}/>
                            <div className="position-relative" style={{height:20}}>
                                <div style={{height:40,width:40}} className="position-absolute spacesItemIcon" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                                    <img src={this.data.icon} className="position-relative" alt="" style={{width:"100%",borderRadius:"33.33%", outline:"inset"}}/>
                                    <div className="spacesItemIconOverlay position-absolute"></div>
                                    {this.state.isHover ? (popUp): ""}
                                </div>
                            </div>
                            <div className="px-2 pb-2 pt-1 text-center position-relative" style={{color:"#d5d6d6", fontSize:13, marginTop:3}}>
                                <div className="mb-1 fw-bold">
                                    <span className="spacesItemTitle">{this.data.title}
                                        {this.state.isHover?"":(popUp)}
                                    </span>
                                </div>
                                <div>
                                    <span>{this.data.description}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </Fragment>
        )
    }
}

export default SpacesItem;