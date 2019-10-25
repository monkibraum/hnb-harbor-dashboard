import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import boundingBox from 'assets/img/boundingBox.png'
import typeA from 'assets/img/A.png';
import typeB from 'assets/img/B.png';
import typeC from 'assets/img/C.png';
import typeD from 'assets/img/D.png';
import typeE from 'assets/img/E.png';


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

                        <div style={{marginBottom:10, overflow:'hidden'}}>
                            <span style={{fontSize:22, fontWeight:'bold'}}>타입</span>
                        </div>
                        <div className={"col-md-12 col-sm-12 type-row"} style={{marginBottom:15}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>A</span>
                                <div>
                                    <img src={typeA}/>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 column2"} >

                            </div>
                        </div>
                        <div className={"col-md-12 col-sm-12 type-row"} style={{marginBottom:15}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>B</span>    
                                <div>
                                    <img src={typeB}/>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 column2"} >

                            </div>
                        </div>
                        <div className={"col-md-12 col-sm-12 type-row"} style={{marginBottom:15}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>C</span>    
                                <div>
                                    <img src={typeC}/>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 column2"} >

                            </div>
                        </div>
                        <div className={"col-md-12 col-sm-12 type-row"} style={{marginBottom:15}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>D</span>    
                                <div>
                                    <img src={typeD}/>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 column2"} >

                            </div>
                        </div>
                        <div className={"col-md-12 col-sm-12 type-row"} style={{marginBottom:15}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>E</span>    
                                <div>
                                    <img src={typeE}/>
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