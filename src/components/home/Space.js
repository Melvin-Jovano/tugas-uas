import { Component } from "react"
import plusSVG from './plus.svg';
import './space.css';

export default class Space extends Component {
    constructor(props) {
        super();
        this.state = {
            data : props.data
        };
    }
    
    render() {
        const spaceList = this.state.data.map((data, index) => {
            return (
                <div key={index} className="text-color-space fw-600 fs-13px d-flex align-items-center p-2 rounded mb-1 space-list">
                    <div className={`${data.isSVG ? 'px-1 icon-bg-space rounded' : ''}`}>
                        <img width={data.isSVG ? 11 : 20} height={data.isSVG ? 11 : 20} alt="" className="rounded" src={data.img}/>
                    </div>
                    &nbsp;&nbsp;
                    <span className="fs-13px">{data.text}</span>
                    &emsp;&emsp;
                </div>
            );
        });

        return (
            // <div className="position-relative bg-light">
                <div className="space-container position-sticky">

                    <div className="sticky-top">
                        <div className="text-color-space fw-600 fs-13px d-flex align-items-center create-space-button p-2 rounded mb-1">
                            <div className="icon-bg-space rounded px-1">
                                <img width={11} height={11} alt="" src={plusSVG}/>
                            </div>
                            &nbsp;&nbsp;
                            <span className="fs-13px">Create Space</span>
                            &emsp;&emsp;
                        </div>
                        
                        {spaceList}

                        <div className="my-4">
                            <hr className="" style={{height : '1px', backgroundColor : 'rgba(255, 255, 255, 0.4)'}}/>
                        </div>

                        <div className="text-break pb-4">
                            <span className="space-link">About</span> ·  <span className="space-link">Careers</span> · <span className="space-link">Terms</span> · <span className="space-link">Privacy</span> · <span className="space-link">Acceptable Use</span> · <span className="space-link">Businesses</span> · <span className="space-link">Press</span> · <span className="space-link">Your Ad Choices</span>
                        </div>
                    </div>

                    </div>
            // </div>
        );
    }
}