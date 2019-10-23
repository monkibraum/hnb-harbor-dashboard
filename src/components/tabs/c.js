import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('UiStore', 'CStore')
@observer
export default class ThirdTab extends Component {

    render() {
        const { UiStore, CStore } = this.props;
        return (
            <div className="tab-container">
           
            </div>
        )
    }
}