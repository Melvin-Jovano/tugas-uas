import React, {Fragment} from "react";
import Navbar from "../components/navbar/Navbar";
import Space from '../components/home/Space';
import { spaceData } from "../components/home/space_data";

class Following extends React.Component{
    render(){
        return(
            <Fragment>
                <Navbar activeIndex={2}/>
                
                <div className="content-home pt-4">
                    <div className="d-flex justify-content-center">
                        <Space data={spaceData}/>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Following;