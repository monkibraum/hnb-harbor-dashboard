import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('UiStore', 'BStore')
@observer
export default class SecondTab extends Component {

    render() {
        const { UiStore, BStore } = this.props;
        return (
            <div className="tab-container">
                    
            </div>
        )
    }
}