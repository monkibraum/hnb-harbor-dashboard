import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import boundingBox from 'assets/img/boundingBox.png'
import typeA from 'assets/img/typeA.png';


@inject('UiStore', 'AStore')
@observer
export default class FirstTab extends Component {

    render() {
        const { UiStore, AStore } = this.props;
        return (
            <div className="tab-container">
                <div>
                    <div className="col-md-5 col-sm-12 board-left">
                        <div>
                            <img src={boundingBox}/>
                        </div>
                    </div>

                    <div className="col-md-7 col-sm-12 board-right" >
                        <div className={"col-md-12 col-sm-12"} style={{marginBottom:15}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>A</span>
                                <div>
                                    <img src={typeA}/>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 column2"} >

                            </div>
                        </div>
                        <div className={"col-md-12 col-sm-12"} style={{marginBottom:15}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>B</span>    
                                <div>
                                    <img src={typeA}/>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 column2"} >

                            </div>
                        </div>
                        <div className={"col-md-12 col-sm-12"} style={{marginBottom:15}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>C</span>    
                                <div>
                                    <img src={typeA}/>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 column2"} >

                            </div>
                        </div>
                        <div className={"col-md-12 col-sm-12"} style={{marginBottom:15}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>D</span>    
                                <div>
                                    <img src={typeA}/>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 column2"} >

                            </div>
                        </div>
                        <div className={"col-md-12 col-sm-12"} style={{marginBottom:15}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>E</span>    
                                <div>
                                    <img src={typeA}/>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 column2"} >

                            </div>
                        </div>
                        {/* <div style={styles.board_accuracy}>

                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}