import { Component, Fragment } from "react"
import Navbar from "../../components/navbar/Navbar";
import Space from '../../components/home/Space';
import { spaceData } from "../../components/home/space_data";
import Content from "../../components/home/Content";
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar activeIndex={1}/>
                
                <div className="content-home pt-4">
                    <div className="d-flex justify-content-center">
                        <Space data={spaceData}/>
                        <Content />
                    </div>
                </div>

            </Fragment>
        );
    }
}