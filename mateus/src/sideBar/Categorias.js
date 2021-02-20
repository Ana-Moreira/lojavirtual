import React from 'react';
import { LiCategory, SideBarStyle, HCategory } from '../sideBar/styled';
import axios from 'axios';

const listOfCategories = ["Animados", "Clássicos", "Contemporâneo"]


export default class SideBar extends React.Component {

    render() {
        let categories = listOfCategories.map(category => {
            return (
                <LiCategory onClick={() => this.props.filterByCategory(category)} key={category}>{category}</LiCategory>
            )
        })
        return (
            <SideBarStyle>
                <HCategory>Tapetes</HCategory>
                {categories}
                <HCategory>Tapetes</HCategory>
                {categories}
            </SideBarStyle>
        )
    }
}