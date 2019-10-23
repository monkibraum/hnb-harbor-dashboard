import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import HomeTemplate from './template';
import 'assets/common.css'

@inject('UiStore')
@observer
export default class HomeContainer extends Component {

    render() {
        const { UiStore } = this.props;
        return (
        <HomeTemplate 
        selectedTab = {UiStore.selectedTab}
        onSelectTab = {UiStore.onSelectTab}
        />
        )
    }
}