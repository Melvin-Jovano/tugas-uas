import { Component, Fragment } from "react"
import Navbar from "../../components/navbar/Navbar";

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar activeIndex={1}/>
                {/* Do Some Shit */}
            </Fragment>
        );
    }
}