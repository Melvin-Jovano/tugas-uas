import { Component } from "react"
import plusSVG from './plus.svg';
import './space.css';
// import { spaceData } from "./space_data";

export default class Space extends Component {
    render() {

        // const spaceList = [];

        return (
            <div className="">
                <div className="text-color-space fw-600 fs-13px d-flex align-items-center create-space-button p-2 rounded mb-1">
                    <div className="icon-bg-space rounded">
                        <img width={15} height={15} alt="" src={plusSVG}/>
                    </div>
                    &nbsp;&nbsp;
                    <span className="fs-13px">Create Space</span>
                    &emsp;&emsp;
                </div>
                
                <div className="text-color-space fw-600 fs-13px d-flex align-items-center create-space-button p-2 rounded mb-1">
                    <div className="icon-bg-space rounded">
                        <img width={15} height={15} alt="" src={plusSVG}/>
                    </div>
                    &nbsp;&nbsp;
                    <span className="fs-13px">Biology</span>
                    &emsp;&emsp;
                </div>
            </div>
        );
    }
}