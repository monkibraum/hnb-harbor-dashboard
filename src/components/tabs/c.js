import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import typeA from 'assets/img/A.png';
import { Table, Label } from 'react-bootstrap';

@inject('UiStore', 'CStore')
@observer
export default class ThirdTab extends Component {

    render() {
        const { UiStore, CStore } = this.props;
        return (
            <div className="tab-container">
                <div className="c-container">

                    <h2 style={{marginBottom:25}}>타입 A</h2>
                    <div className={"col-md-12 col-sm-12"} style={{marginBottom:15, padding: 0}}>
                        <div className={"col-md-6 col-sm-12"} style={{padding: 0}}>
                            <div>
                                <img src={typeA} style={{ width: '100%'}}/>
                            </div>
                        </div>
                        <div className={"col-md-6 col-sm-12 table-wrapper"} style={{padding: 0}}>
                            <Table striped bordered hover style={{marginBottom: 50}}>
                                <tbody >
                                    <tr>
                                        <th>길이</th>
                                        <td>364</td>
                                    </tr>
                                    <tr>
                                        <th>직경</th>
                                        <td>254</td>
                                    </tr>
                                    <tr>
                                        <th>나사산수</th>
                                        <td>315</td>
                                    </tr>
                                    <tr>
                                        <th>피치</th>
                                        <td>315</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div className={"col-md-12 col-sm-12"} style={{marginBottom:15, padding: 0}}>
                        <div className={"col-md-6 col-sm-12"} style={{padding: 0}}>
                            <div>
                                <img src={typeA} style={{ width: '100%'}}/>
                            </div>
                        </div>
                        <div className={"col-md-6 col-sm-12"} style={{padding: 0, paddingLeft: 20}}>
                            <h3>
                                <Label bsStyle="danger">감지</Label> 얼룩오염  <span> ( 85.46% )</span>
                            </h3>
                            <h3>
                                <Label bsStyle="danger">감지</Label> 스크래치  <span> ( 75.46% )</span>
                            </h3>
                            <h3>
                                <Label bsStyle="danger">감지</Label> 크랙  <span> ( 68.46% )</span>
                            </h3>
                            <h3>
                                <Label bsStyle="success">정상</Label> 벤딩 
                            </h3>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}