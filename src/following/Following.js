import React, {Fragment} from "react";
import Navbar from "../components/navbar/Navbar";
import Space from '../components/home/Space';
import { spaceData } from "../components/home/space_data";
import './following.css'
import { followingData } from "./data/following_data";
import FollowingTechnology from "./FollowingTechnology";
import FollowingJsProgramming from "./FollowingJsProgramming"
import FollowingWebDesign from "./FollowingWebDesign";

class Following extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data : followingData
        };
        
    }
    
    render() {
        const followingList = this.state.data.map((data, index) => {
            return(
                <div className="content-wrap" key={index}>
                    <img  className="img-content" alt="" src={data.img} width={40} height={40} />
                    <div className="text-body">
                        <span className="title">{data.title}</span>
                        <span className="subtitle">{data.subtitle}</span>
                        <span className="text">{data.text}</span>
                    </div>
                </div>
            )
        }); 

        return(
            <Fragment>
                <Navbar activeIndex={2}/>
                
                <div className="content-home pt-4">
                    <div className="d-flex justify-content-center">
                        <Space data={spaceData}/>
                        <div className="mx-2 following">
                            <div className="box-build">
                                <img alt="" width={100} src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.build_following_feed_darkmode.png-26-3fb93e1da358eb6e.png"/>
                                <h5 className="text-build">Build your new following feed</h5>
                                <span className="subtext-build">Build your new following feed</span>
                            </div>
                            <h5 className="title mb-3">Discover Spaces</h5>

                            {/* Spaces you might like */}
                            <div className="row" style={{ background : "#262626", height : "40px"}}>
                                <h6 className="text-light mt-2">Spaces you might like</h6>
                            </div>
                            {followingList}

                            {/* Technology */}
                            <div className="row mt-4" style={{ background : "#262626", height : "40px"}}>
                                <h6 className="text-light mt-2">Technology</h6>
                            </div>
                            <FollowingTechnology />

                            {/* JavaScript (programming language) */}
                            <div className="row mt-4" style={{ background : "#262626", height : "40px"}}>
                                <h6 className="text-light mt-2">JavaScript (programming language)</h6>
                            </div>
                            <FollowingJsProgramming />

                            {/* Web Design*/}
                            <div className="row mt-4" style={{ background : "#262626", height : "40px"}}>
                                <h6 className="text-light mt-2">Web Design</h6>
                            </div>
                            <FollowingWebDesign />
                        </div>

                        <div className="todo-container">
                            {/* blank */}
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Following;