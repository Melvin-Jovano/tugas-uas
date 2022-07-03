import { Component } from "react"
import askSVG from './ask.svg';
import answerSVG from './answer.svg';
import penSVG from './pen.svg';
import timesSVG from './times.svg';
import modSVG from './mod.svg';
import upvoteSVG from './upvote.svg';
import downvoteSVG from './downvote.svg';
import chatSVG from './chat.svg';
import refreshSVG from './refresh.svg';
import shareSVG from './share.svg';
import moreSVG from './more.svg';
import {FaPlay} from 'react-icons/fa'
import './content.css';

export default class Content extends Component {
    constructor(props) {
        super();
        this.state = {
            data : props.data
        };
    }
    
    render() {

        return (
            <div className="mx-2 content">
                <div className="post-content pt-3 px-3 pb-1 rounded fs-13px fw-600">
                    <div className="d-flex align-items-center">
                        <img src="https://qph.fs.quoracdn.net/main-thumb-750310938-50-vqunkwslayskhlspuddbrbcefzltdjge.jpeg" width={32} height={32} className="rounded-circle" alt=""/>
                        &nbsp;&nbsp;
                        <div className="input-post px-2 py-1 w-100">
                            What do you want to ask or share?
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-evenly mt-1 ">
                        <div className="d-flex align-items-center post-button py-1 px-5">
                            <img src={askSVG} alt=""/>&nbsp;&nbsp;Ask
                        </div>

                        <div className="d-flex align-items-center post-button py-1 px-5">
                            <img src={answerSVG} alt=""/>&nbsp;&nbsp;Answer
                        </div>

                        <div className="d-flex align-items-center post-button py-1 px-5">
                            <img src={penSVG} alt=""/>&nbsp;&nbsp;Post
                        </div>
                    </div>

                </div>

                <div className="w-100 my-2 contents rounded">
                    <div className="pt-3 px-3">
                        <div className="position-relative writer">
                            <div className="position-absolute hide-post p-1">
                                <img src={timesSVG} alt=""/>
                            </div>
                            <div className="text-color-title fs-13px">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>
                                                <img width={36} height={36} src="https://qph.fs.quoracdn.net/main-thumb-ti-2738051-50-bkvamefuhxabguyfxkswiozunlnidfxf.jpeg" alt="" className="img-writer"/>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                                <span className="fw-bold cursor-pointer hover-underline">Info Orb</span>
                                                &nbsp;·&nbsp;
                                                <span className="fw-bold cursor-pointer hover-underline text-color-link">Follow</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-color-description fw-550">
                                                &nbsp;&nbsp;Posted by&nbsp;
                                                <span className="cursor-pointer hover-underline">Josephine D. Leslie</span>
                                                &nbsp;
                                                
                                                <div className="position-relative d-inline-block">
                                                    <div className="position-absolute a rounded p-1 text-center d-none" id="tooltip-1">
                                                        Moderator
                                                        <div className="position-absolute pointer-tooltip-write">
                                                            <FaPlay style={{color : '#404040'}}/>
                                                        </div>
                                                    </div>
                                                    <img className="writer-tooltip" data-tooltip="tooltip-1" src={modSVG} alt=""/>
                                                </div>
                                                
                                                &nbsp;·&nbsp;
                                                <span className="cursor-pointer hover-underline">Jun 7</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>

                        <div className="cursor-pointer fs-16px hover-underline text-color-title-post fw-bolder">Why didn't Einstein's descendants inherit his IQ?</div>
                    </div>

                    <div className="text-color-title fs-15px fw-600 pb-3 px-3">
                        Yes they did.
                        <br /><br />
                        His, and Mileva's too.
                        <br /><br />
                        Hans Albert Einstein was so good at hydraulic engineering that an award was even named after him.
                    </div>

                    <div className="text-color-title fs-15px fw-600 pb-3">
                        <img src={'https://qph.fs.quoracdn.net/main-qimg-e3629b94eb87f753d6d5bb9d68c8327c-pjlq'} className="img-fluid" alt=""/>
                    </div>

                    
                    
                    <div className="text-color-title fs-15px pb-3 fw-600 px-3">
                        Hans was probably extremely smart, but he didn't achieve as much as his father and grandfather did.
                        <br /><br />
                        What they probably didn't inherit was Albert's unusual brain structure.
                        <br /><br />
                        Some of his descendants may have his IQ, or even exceed it, but they are not Albert. Albert Einstein was unique.
                    </div>

                    <div className="text-color-footer-post fs-13px pb-3 fw-600 px-3">
                        368.1K views
                        &nbsp;·&nbsp;
                        <span className="cursor-pointer hover-underline">View 7,823 upvotes</span>
                        &nbsp;·&nbsp;
                        <span className="cursor-pointer hover-underline">View 19 shares</span>
                    </div>

                    <div className="pb-3 px-3 position-relative">
                        <div className="d-flex">
                            <div className="cursor-pointer upvote-button text-color-description fs-14px d-flex align-items-center p-3 px-2 py-2 fw-600"> 
                                <img src={upvoteSVG} alt=""/>&nbsp;20K
                            </div>
                            <div className="d-flex align-items-center button-divider">
                                |
                            </div>
                            <div className="cursor-pointer downvote-button d-flex align-items-center p-3 px-2 py-2">
                                <img src={downvoteSVG} alt=""/>
                            </div>

                            <div className="cursor-pointer d-flex align-items-center p-3 px-2 py-2 text-color-description fw-600 interaction-button mx-1 fs-14px">
                                <img src={refreshSVG} alt=""/>&nbsp;93
                            </div>

                            <div className="cursor-pointer d-flex align-items-center p-3 px-2 py-2 text-color-description fw-600 interaction-button mx-1 fs-14px">
                                <img src={chatSVG} alt=""/>&nbsp;81
                            </div>

                            <div className="position-absolute more-action d-flex align-items-center px-3">
                                <div className="cursor-pointer d-flex align-items-center text-color-description interaction-button p-2">
                                    <img src={shareSVG} alt="" />
                                </div>

                                &nbsp;

                                <div className="cursor-pointer d-flex align-items-center text-color-description interaction-button p-2">
                                    <img src={moreSVG} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}