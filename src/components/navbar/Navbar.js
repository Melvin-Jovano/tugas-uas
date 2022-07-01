import { Component, Fragment } from "react"
import './navbar.css';
import { NavLink } from "react-router-dom";
import bellSVG from './bell.svg';
import groupSVG from './group.svg';
import penSVG from './pen.svg';
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
                <nav className="navbar-bg">
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
                            <NavLink to={'/'}>
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
                                <div className="position-absolute a">
                                    <img src={searchSVG} alt="" className=""/>
                                </div>
                                <input className="input-navbar-bg text-white border-0" placeholder="Search Quora"/>
                            </div>
                        </div>
                    </div>
                </nav>
            </Fragment>
        );
    }
}