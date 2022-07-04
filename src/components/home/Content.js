import { Component } from "react"
import askSVG from './ask.svg';
import answerSVG from './answer.svg';
import penSVG from './pen.svg';
import timesSVG from './times.svg';
import modSVG from './mod.svg';
import adminSVG from './admin.svg';
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
        const data = this.state.data.map((data, index) => {
            const title = (data.title) ? <div className="d-inline cursor-pointer fs-16px hover-underline text-color-title-post fw-bolder">{data.title}</div> : <div></div>;

            return (
                <div className="w-100 my-2 contents rounded" key={index}>
                    <div className="pt-3 px-3">
                        <div className="position-relative writer mb-2">

                            <div className="fw-600 fs-13px position-absolute hide-tooltips rounded p-1 text-center text-color-description d-none" id={`hide-tooltip-${index}`} data-tooltip={`hide-tooltip-${index}`}>
                                &nbsp;Hide&nbsp;
                                <div className="position-absolute pointer-tooltip-write">
                                    <FaPlay style={{color : '#404040'}}/>
                                </div>
                            </div>

                            <div className="position-absolute hide-post p-1 hide-tooltip" data-tooltip={`hide-tooltip-${index}`}>
                                <img data-tooltip={`hide-tooltip-${index}`} src={timesSVG} alt=""/>
                            </div>

                            <div className="text-color-title fs-13px">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>
                                                <img width={36} height={36} src={data.writerImg} alt="" className="img-writer"/>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                                <span className="fw-bold cursor-pointer hover-underline">{data.space}</span>
                                                &nbsp;·&nbsp;
                                                <span className="fw-bold cursor-pointer hover-underline text-color-link">Follow</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-color-description fw-550">
                                                &nbsp;&nbsp;Posted by&nbsp;
                                                <span className="cursor-pointer hover-underline">{data.writer}</span>
                                                &nbsp;
                                                <div className={`position-relative d-inline-block ${data.isMod != null || data.isAdmin != null ? '' : 'd-none'}`}>
                                                    <div className="position-absolute writer-tooltips rounded p-1 text-center d-none" id={`tooltip-${index}`}>
                                                        {data.isMod ? 'Moderator' : 'Admin'}
                                                        <div className="position-absolute pointer-tooltip-write">
                                                            <FaPlay style={{color : '#404040'}}/>
                                                        </div>
                                                    </div>
                                                    <img className="writer-tooltip" data-tooltip={`tooltip-${index}`} src={data.isMod ? modSVG : adminSVG} alt=""/>
                                                </div>
                                                
                                                &nbsp;·&nbsp;
                                                <span className="cursor-pointer hover-underline">{data.createdAt}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>

                        {title}

                    </div>

                    <div dangerouslySetInnerHTML={{__html : data.desc}}></div>
                    
                    <div className="text-color-footer-post fs-13px pb-1 fw-600 px-3">
                        {data.views} views
                        &nbsp;·&nbsp;
                        <span className="cursor-pointer hover-underline">View {data.upvoted} upvotes</span>
                        &nbsp;·&nbsp;
                        <span className="cursor-pointer hover-underline">View {data.shares} shares</span>
                    </div>

                    <div className="pb-1 px-3 position-relative">
                        <div className="d-flex">
                            <div className="fw-600 text-color-description fs-13px position-absolute upvote-tooltips rounded p-1 text-center d-none" id={`upvote-tooltip-${index}`} data-tooltip={`upvote-tooltip-${index}`}>
                                &nbsp;Upvote&nbsp;
                                <div className="position-absolute pointer-tooltip-write">
                                    <FaPlay style={{color : '#404040'}}/>
                                </div>
                            </div>

                            <div className="cursor-pointer upvote-button text-color-description fs-14px d-flex align-items-center px-3 py-2 fw-600 upvote-tooltip" data-tooltip={`upvote-tooltip-${index}`}> 
                                <img data-tooltip={`upvote-tooltip-${index}`} src={upvoteSVG} alt=""/>&nbsp;{data.upvote}
                            </div>

                            <div className="d-flex align-items-center button-divider">
                                |
                            </div>

                            <div className="fw-600 text-color-description fs-13px position-absolute downvote-tooltips rounded p-1 text-center d-none" id={`downvote-tooltip-${index}`} data-tooltip={`downvote-tooltip-${index}`}>
                                &nbsp;Downvote&nbsp;
                                <div className="position-absolute pointer-tooltip-write">
                                    <FaPlay style={{color : '#404040'}}/>
                                </div>
                            </div>

                            <div className="cursor-pointer downvote-button d-flex align-items-center px-3 py-2 downvote-tooltip" data-tooltip={`downvote-tooltip-${index}`}>
                                <img data-tooltip={`downvote-tooltip-${index}`} src={downvoteSVG} alt=""/>
                            </div>

                            &nbsp;

                            <div className="cursor-pointer d-flex align-items-center text-color-description interaction-button p-2 position-relative refresh-tooltip" data-tooltip={`refresh-tooltip-${index}`}>
                                <div className="fw-600 fs-13px position-absolute refresh-tooltips rounded p-1 text-center d-none" id={`refresh-tooltip-${index}`} data-tooltip={`refresh-tooltip-${index}`}>
                                    Share
                                    <div className="position-absolute pointer-tooltip-write">
                                        <FaPlay style={{color : '#404040'}}/>
                                    </div>
                                </div>

                                <div className="cursor-pointer d-flex align-items-center text-color-description fw-600 interaction-button mx-1 fs-14px" data-tooltip={`refresh-tooltip-${index}`}>
                                    <img  data-tooltip={`refresh-tooltip-${index}`} src={refreshSVG} alt=""/>&nbsp;{data.shared}
                                </div>
                            </div>

                            &nbsp;

                            <div className="cursor-pointer d-flex align-items-center text-color-description interaction-button p-2 position-relative comment-tooltip" data-tooltip={`comment-tooltip-${index}`}>
                                <div className="fw-600 fs-13px position-absolute comment-tooltips rounded p-1 text-center d-none" id={`comment-tooltip-${index}`} data-tooltip={`comment-tooltip-${index}`}>
                                    Comment
                                    <div className="position-absolute pointer-tooltip-write">
                                        <FaPlay style={{color : '#404040'}}/>
                                    </div>
                                </div>

                                <div className="cursor-pointer d-flex align-items-center text-color-description fw-600 interaction-button mx-1 fs-14px" data-tooltip={`comment-tooltip-${index}`}>
                                    <img data-tooltip={`comment-tooltip-${index}`} src={chatSVG} alt=""/>&nbsp;{data.comments}
                                </div>
                            </div>

                            <div className="position-absolute more-actions d-flex align-items-center px-3">
                                <div className="cursor-pointer d-flex align-items-center text-color-description interaction-button p-2 position-relative share-tooltip" data-tooltip={`share-tooltip-${index}`}>
                                    <div className="fw-600 fs-13px position-absolute share-tooltips rounded p-1 text-center d-none" id={`share-tooltip-${index}`}>
                                        More sharing option
                                        <div className="position-absolute pointer-tooltip-write">
                                            <FaPlay style={{color : '#404040'}}/>
                                        </div>
                                    </div>

                                    <img data-tooltip={`share-tooltip-${index}`} src={shareSVG} alt="" />
                                </div>

                                &nbsp;

                                <div className="cursor-pointer d-flex align-items-center text-color-description interaction-button p-2 position-relative more-tooltip" data-tooltip={`more-tooltip-${index}`}>
                                    <div className="fw-600 fs-13px position-absolute more-tooltips rounded p-1 text-center d-none" id={`more-tooltip-${index}`}>
                                        More
                                        <div className="position-absolute pointer-tooltip-write">
                                            <FaPlay style={{color : '#404040'}}/>
                                        </div>
                                    </div>

                                    <img data-tooltip={`more-tooltip-${index}`} src={moreSVG} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

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

                {data}

            </div>
        );
    }
}