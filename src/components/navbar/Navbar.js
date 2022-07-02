import { Component, Fragment } from "react"
import './navbar.css';
import { NavLink } from "react-router-dom";
import bellSVG from './bell.svg';
import groupSVG from './group.svg';
import penSVG from './pen.svg';
import globeSVG from './globe.svg';
import homeSVG from './home.svg';
import searchSVG from './search.svg';
import {logoSVG} from './logoSVG';
import {noteSVG} from './noteSVG';

export default class Navbar extends Component {

    constructor(props) {
        super();
        this.state = {
            active : props.activeIndex
        };
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar-component">
                    <div className="container icon-navbar-color d-flex justify-content-center">
                        <div className="mx-3">
                            <NavLink to={'/'}>
                                {logoSVG}
                            </NavLink>
                        </div>

                        <div className="d-flex align-items-center mx-3">
                            <NavLink to={'/'}>
                                <img src={homeSVG} alt=""/>
                            </NavLink>
                        </div>

                        <div className="d-flex align-items-center mx-3">
                            <NavLink to={'/'}>
                                {noteSVG}
                            </NavLink>
                        </div>

                        <div className="d-flex align-items-center mx-3">
                            <NavLink to={'/'}>
                                <img src={penSVG} alt=""/>
                            </NavLink>
                        </div>

                        <div className="d-flex align-items-center mx-3">
                            <NavLink to={'/spaces'}>
                                <img src={groupSVG} alt=""/>
                            </NavLink>
                        </div>

                        <div className="d-flex align-items-center mx-3">
                            <NavLink to={'/'}>
                                <img src={bellSVG} alt=""/>
                            </NavLink>
                        </div>

                        <div className="d-flex align-items-center mx-3">
                            <div className="position-relative">
                                <div className="position-absolute search-icon">
                                    <img src={searchSVG} alt="" className=""/>
                                </div>
                                <input className="fw-600 input-navbar text-white" placeholder="Search Quora"/>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mx-3">
                            <div className="fw-600 text-main-color badge-navbar px-3 py-1">
                                Try Quora+
                            </div>
                        </div>

                        <div className="d-flex align-items-center mx-3">
                            <div className="">
                                <img src="https://qph.cf2.quoracdn.net/main-thumb-750310938-50-vqunkwslayskhlspuddbrbcefzltdjge.jpeg" width={24} height={24} className="rounded-circle" alt=""/>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mx-3">
                            <div className="">
                                <img src={globeSVG} width={24} height={24} className="rounded-circle" alt=""/>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mx-3">
                            <div className="">
                                <img src={globeSVG} width={24} height={24} className="rounded-circle" alt=""/>
                            </div>
                        </div>
                    </div>
                </nav>
            </Fragment>
        );
    }
}