import { Component, Fragment } from "react"
import './navbar.css';
import { NavLink } from "react-router-dom";
import {bellSVG} from './bellSVG';
import {groupSVG} from './groupSVG';
import {penSVG} from './penSVG';
import globeSVG from './globe.svg';
import {homeSVG} from './homeSVG';
import arrowBottomSVG from './arrow_bottom.svg';
import searchSVG from './search.svg';
import pencilSVG from './pencil.svg';
import {logoSVG} from './logoSVG';
import {noteSVG} from './noteSVG';
import timesSVG from '../home/times.svg'
import arrowRightSVG from './arrow_right.svg'
import peopleSVG from './people.svg'
import {FaPlay} from 'react-icons/fa'

export default class Navbar extends Component {

    constructor(props) {
        super();
        this.state = {
            activeIndex : props.activeIndex
        };
    }

    setNavClass(index) {
        let defaultClass = 'd-flex align-items-center px-2 mx-2';
        if (index === this.state.activeIndex) defaultClass += ' is-active';
        return defaultClass;
    }

    render() {
        return (
            <Fragment>
                <div className="modal fade" id="modalCreatePostNavbar" tabIndex="-1" role="dialog" aria-labelledby="modalCreatePostNavbarTitle" aria-hidden="true">
                    <div className="modal-dialog a modal-dialog-centered" role="document">
                        <div className="modal-content p-0">
                            <div className="modal-body p-0">
                                <div className="d-flex">
                                    <div className="flex-grow-5 p-2">
                                        <img src={timesSVG} alt=""/>
                                    </div>

                                    <div className="fw-600 flex-grow-1 text-center text-color-title py-2">
                                        Add Question
                                    </div>

                                    <div className="fw-600 flex-grow-1 text-center text-color-title py-2">
                                        Create Post
                                    </div>
                                </div>

                                <div className="p-3 d-flex align-items-center">
                                    <img className="rounded-circle" width={18} height={18} src="https://qph.cf2.quoracdn.net/main-thumb-750310938-200-vqunkwslayskhlspuddbrbcefzltdjge.jpeg" alt=""/>
                                    <img src={arrowRightSVG} alt="" width={12} height={12} className="mx-2"/>
                                    <div className="d-flex align-items-center">
                                        <div className="quora-plus cursor-pointer fw-600 text-main-color-navbar badge-navbar px-2 py-1 align-items-center">
                                            <img alt="" src={peopleSVG} width={20} height={20}/>
                                            &nbsp;
                                            Public
                                            &nbsp;
                                            <img alt="" src={arrowBottomSVG} width={16} height={16}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-relative mb-2">
                    <nav className="navbar-component position-fixed w-100">
                        <div className="d-flex justify-content-center">
                            <div className="mx-3">
                                <NavLink to={'/'}>
                                    {logoSVG}
                                </NavLink>
                            </div>

                            <div className={this.setNavClass(1)}>
                                <NavLink to={'/'}>
                                    {homeSVG(this.state.activeIndex === 1)}
                                </NavLink>
                            </div>

                            <div className={this.setNavClass(2)}>
                                <NavLink to={'/following'}>
                                    {noteSVG(this.state.activeIndex === 2)}
                                </NavLink>
                            </div>

                            <div className={this.setNavClass(3)}>
                                <NavLink to={'/'}>
                                    {penSVG(this.state.activeIndex === 3)}
                                </NavLink>
                            </div>

                            <div className={this.setNavClass(4)}>
                                <NavLink to={'/spaces'}>
                                    {groupSVG(this.state.activeIndex === 4)}
                                </NavLink>
                            </div>

                            <div className={this.setNavClass(5)}>
                                <NavLink to={'/'}>
                                    {bellSVG(this.state.activeIndex === 5)}
                                </NavLink>
                            </div>

                            <div className="d-flex align-items-center mx-3">
                                <div className="position-relative">
                                    <div className="position-absolute search-icon-navbar">
                                        <img src={searchSVG} alt="" className=""/>
                                    </div>
                                    <input className="fw-600 input-navbar text-white" placeholder="Search Quora"/>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mx-2">
                                <div className="quora-plus cursor-pointer fw-600 text-main-color-navbar badge-navbar px-3 py-1">
                                    Try Quora+
                                </div>
                            </div>

                            <div className="d-flex align-items-center mx-2">
                                <img src="https://qph.cf2.quoracdn.net/main-thumb-750310938-50-vqunkwslayskhlspuddbrbcefzltdjge.jpeg" width={24} height={24} className="rounded-circle" alt=""/>
                            </div>

                            <div className="d-flex align-items-center mx-2">
                                <img src={globeSVG} width={24} height={24} className="rounded-circle" alt=""/>
                            </div>

                            <div data-modal="tooltip-navbar" className="d-flex align-items-center mx-2">
                                <div data-modal="tooltip-navbar" className="btn d-flex align-items-center position-relative button-tooltip-navbar text-light fw-600 py-1 pl-3 border-0">
                                    Add Question
                                    &emsp;
                                    <div data-modal="tooltip-navbar">
                                        <img data-modal="tooltip-navbar" src={arrowBottomSVG} alt=""/>
                                    
                                        <div id="modal-tooltip-navbar" data-toggle="modal" data-target="#modalCreatePostNavbar" className="d-none align-items-center position-absolute tooltip-badge-navbar px-2 py-1">
                                            <div className="position-absolute pointer-tooltip-navbar">
                                                <FaPlay />
                                            </div>
                                            <img src={pencilSVG} alt="" width={18} height={18}/>
                                            &nbsp;
                                            Create post
                                            &nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    &nbsp;
                </div>
                &nbsp;
            </Fragment>
        );
    }
}