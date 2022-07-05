import {Component, Fragment} from "react";
import { followingWebDesign } from "./data/following_web";

export default class FollowingWebDesign extends Component {
    constructor(props) {
        super()
        this.state = {
            data : followingWebDesign
        }
    }

    render(){
        const follTech = this.state.data.map((data, index) =>{
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
        })

        return(
            <Fragment>
                {follTech}
            </Fragment>
        )
    }
}