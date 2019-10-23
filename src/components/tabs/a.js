import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import 'bootstrap/dist/css/bootstrap.min.css';


const styles = {
    box1: {
        boxSizing: 'border-box',
        minHeight: 100,
        background: '#eee'
    },
    box2: {
        boxSizing: 'border-box',
        minHeight: 100,
        background: '#ddd'
    }
}

@inject('UiStore', 'AStore')
@observer
export default class FirstTab extends Component {

    render() {
        const { UiStore, AStore } = this.props;
        return (
            <div className="tab-container">
                <div style={styles.wrapper}>
                    <div className="col-md-5 col-sm-12 board-left">
                        <div>
                            이미지
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div>
                            <div className={"col-md-12"}>
                                <div className={"col-md-5 col-sm-12"} style={styles.box1}>
                                    이미지
                                </div>
                                <div className={"col-md-7 col-sm-12"} style={styles.box2}>
                                    예측정확도
                                </div>
                            </div>
                            <div className={"col-md-12 col-sm-12"}>
                                <div className={"col-md-5 col-sm-12"} style={styles.box1}>
                                    이미지
                                </div>
                                <div className={"col-md-7 col-sm-12"} style={styles.box2}>
                                    예측정확도
                                </div>
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