import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import 'bootstrap/dist/css/bootstrap.min.css';


const styles = {
    wrapper: {
        width:'100%',
        height: '100%',
        overflow:'hidden',
    },
    boxContainer : {
        width: '35%',
        height:'100%',
        float:'left',
        borderRight: '1px solid #c1c1c1',
        padding: 40,
        paddingTop: 80,
    },
    boxWrapper: {
        border: '1px solid #e1e1e1',
        width: '100%',
        height:'80%'
    },
    board: {
        width: '65%',
        height:'100%',
        float:'right',
    },
    board_type : {
        display:'inline-block',
        width: '100%',
        height: '100%',

        // borderRight:'1px solid #d1d1d1',
    },
    box1 : {
        boxSizing: 'border-box',
        minHeight: 100,
        background: '#eee'
    },
    box2 : {
        boxSizing: 'border-box',
        minHeight: 100,
        background: '#ddd'
    }
    // board_accuracy:{
    //     display:'inline-block',
    //     width: '40%',
    //     height: '100%',
    // }

}

@inject('UiStore', 'AStore')
@observer
export default class FirstTab extends Component {

    render() {
        const { UiStore, AStore } = this.props;
        return (
            <div className="tab-container">
                <div style={styles.wrapper}>
                    <div style={styles.boxContainer}>
                        <div style={styles.boxWrapper}>
                            이미지
                        </div>
                    </div>
                    <div style={styles.board}>
                        <div style={styles.board_type}>
                            <div className={"col-md-12"}>
                                <div className={"col-md-3"} style={styles.box1}>

                                </div>
                                <div className={"col-md-8"} style={styles.box2}>

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