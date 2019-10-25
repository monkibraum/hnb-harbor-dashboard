import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import boundingBox from 'assets/img/boundingBox.png'
import typeA from 'assets/img/A.png';
import { Table } from 'react-bootstrap'

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
                        <div className={"col-md-12 col-sm-12 type-row"} style={{marginBottom:50}}>
                            <div className={"col-md-6 col-sm-12 column1"} >
                                <span>A</span>
                                <div>
                                    <img src={typeA}/>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 column2"} >

                            </div>
                        </div>
                        <div className={"col-md-12 col-sm-12"} style={{padding: 0}}>
                            <div className={"square"}>
                            <img src={boundingBox} style={{width:'100%', minHeight:500}}/>
                            </div>
                            <div className={"table-wrapper"} style={{ paddingLeft: 20}}>
                                <Table striped bordered hover style={{marginBottom: 50}}>
                                    <tbody >
                                        <tr>
                                        <th>길이</th>
                                        <td>364</td>
                                        </tr>
                                        <tr>
                                        <th>깊이</th>
                                        <td>254</td>
                                        </tr>
                                        <tr>
                                        <th>높이</th>
                                        <td>315</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                        <th>전체부피</th>
                                        <td>364</td>
                                        </tr>
                                        <tr>
                                        <th>단위체적</th>
                                        <td>254</td>
                                        </tr>
                                        <tr>
                                        <th>총수량계산</th>
                                        <td>315</td>
                                        </tr>
                                        <tr>
                                        <th>총중량계산</th>
                                        <td>315</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                

                            </div>
                            {/* <ul>
                                <li><label>길이</label><span>364</span></li>
                                <li><label>깊이</label><span>254</span></li>
                                <li><label>높이</label><span>315</span></li>
                            </ul> */}
                        </div>
                        {/* <div style={styles.board_accuracy}>

                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}