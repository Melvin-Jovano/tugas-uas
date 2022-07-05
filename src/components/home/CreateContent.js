import { Component } from "react"
import timesSVG from '../home/times.svg'
import arrowRightSVG from '../navbar/arrow_right.svg'
import peopleSVG from './people.svg'
import arrowBottomSVG from '../navbar/arrow_bottom.svg';

export default class CreateContent extends Component {
    constructor(props) {
        super();
        this.questions = ['what', 'how', 'when', 'why', 'who', 'where'];
        this.state = {
            keyword : '',
            reccomendation : []
        };

        this.onKeyUpKeyword = this.onKeyUpKeyword.bind(this);
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    onKeyUpKeyword(element) {
        const value = element.currentTarget.value.toLowerCase();
        const recList = [];

        this.questions.forEach((question, index) => {
            if (value.includes(`${question} is `)) {
                const v = value.replace(`${question} is `, '');
                if(v !== '') this.questions.forEach((quest, idx) => {
                    recList.push(
                        <div key={`${index}${idx}`} className="py-2 rec-box cursor-pointer">
                            <span>{quest} is {v}</span>
                            <br />
                            <span className="fw-600 text-answers">{this.randomIntFromInterval(0, 40)} Answers</span>
                        </div>
                    );
                });
            }
        });

        this.setState({
            reccomendation : recList
        });
    }

     render() {
        return(
            <div className="modal fade" id="modalCreatePostNavbar" tabIndex="-1" role="dialog" aria-labelledby="modalCreatePostNavbarTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content p-0">
                        <div className="modal-body p-0" style={{height : "50vh", overflow : "auto"}}>
                            <div className="d-flex px-2 border-b">
                                <div className="cursor-pointer flex-grow-5 pt-1 px-2 cancel-question" data-dismiss="modal">
                                    <img src={timesSVG} alt=""/>
                                </div>

                                <div className="cursor-pointer fw-600 flex-grow-1 pt-2 px-2 add-panel bg-on-hover text-center text-color-title py-2">
                                    Add Question
                                </div>

                                <div className="cursor-pointer fw-600 flex-grow-1 bg-on-hover pt-2 px-2 text-center text-color-title py-2">
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

                            <div className="px-3 pt-1">
                                <input onKeyUp={this.onKeyUpKeyword} placeholder='Start your question with "What", "How", "Why", etc.' className="w-100 input-create-post fw-600 py-2 fs-18px text-color-title"/>
                            </div>

                            <div className="px-3 pt-1 pb-2">
                                <div className="fw-bold text-color-title fs-13px">
                                    {this.state.reccomendation}
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <div className="d-flex align-items-end">
                                <div className="cursor-pointer p-2 px-3 fs-14px fw-600 text-main-color-navbar cancel-question" data-dismiss="modal">
                                    Cancel
                                </div>
                                <div className="add-question fs-14px fw-600 text-white cursor-pointer p-2">
                                    Add Question
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
     }
}