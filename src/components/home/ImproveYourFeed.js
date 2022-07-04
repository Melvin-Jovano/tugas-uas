import { Component } from "react"
import checkSVG from './check.svg';
import checkboxSVG from './checkbox.svg';
import './improve_your_feed.css';

export default class ImproveYourFeed extends Component {
    constructor(props) {
        super();
        this.state = {
            data : props.data
        };
    }
    
    render() {
        return (
                <div className="todo-container position-sticky text-color-title">
                    <div className="todo-box fw-600 w-100 ">
                        <div className="py-2 px-3 fs-15px">
                            Improve Your Feed
                        </div>

                        <div className="py-2 px-3 fs-15px border-todo-top">
                            <img src={checkSVG} width={16} height={16} alt=""/>
                            &nbsp;&nbsp;
                            <span className="fs-13px text-done">Visit your feed</span>
                        </div>
                        
                        <div className="py-2 px-3 fs-15px border-todo-top">
                            <img src={checkSVG} width={16} height={16} alt=""/>
                            &nbsp;&nbsp;
                            <span className="fs-13px text-done">Follow 4 more Spaces</span>
                        </div>

                        <div className="py-2 px-3 fs-15px border-todo-top">
                            <img src={checkSVG} width={16} height={16} alt=""/>
                            &nbsp;&nbsp;
                            <span className="fs-13px text-done">Upvote 2 pieces of content</span>
                        </div>

                        <div className="py-2 px-3 fs-15px border-todo-top">
                            <img src={checkSVG} width={16} height={16} alt=""/>
                            &nbsp;&nbsp;
                            <span className="fs-13px text-done">Answer a question</span>
                        </div>

                        <div data-toggle="modal" data-target="#modalCreatePostNavbar" className="py-2 px-3 fs-15px border-todo-top undone cursor-pointer">
                            <img src={checkboxSVG} width={16} height={16} alt=""/>
                            &nbsp;&nbsp;
                            <span className="fs-13px">Ask a question</span>
                        </div>
                    </div>
                </div>
        );
    }
}