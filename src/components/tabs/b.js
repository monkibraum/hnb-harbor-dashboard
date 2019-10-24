import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import boundingBox from 'assets/img/boundingBox.png'
import typeA from 'assets/img/typeA.png';

@inject('UiStore', 'BStore')
@observer
export default class SecondTab extends Component {

    render() {
        const { UiStore, BStore } = this.props;
        return (
            <div className="tab-container">
                <div >

                    <div className="col-md-5 col-sm-12 board-left">
                        <div className="square">
                            <label className="image-label">전</label>
                            <img src={boundingBox}/>
                        </div>
                        <div className="square">
                            <label className="image-label">후</label>
                            <img src={boundingBox}/>
                        </div>
                        <div className="square">
                            <label className="image-label">좌</label>
                            <img src={boundingBox}/>
                        </div>
                        <div className="square">
                            <label className="image-label">우</label>
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
                        <div className={"col-md-12 col-sm-12"}>
                            <div className={"square"}>
                            <img src={boundingBox} style={{width:'100%', maxHeight:400}}/>
                            </div>
                            <ul>
                                <li>길이</li>
                                <li>깊이</li>
                                <li>높이</li>
                            </ul>
                        </div>
                        {/* <div style={styles.board_accuracy}>

                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}