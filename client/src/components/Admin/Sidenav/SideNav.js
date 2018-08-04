import React, { Component } from 'react';
import './SideNav.css';

export default class SideNavAdmin extends Component {
    render() {
        return (
            <div>
                <div class="header"></div>
                <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
                <label for="openSidebarMenu" class="sidebarIconToggle">
                    <div class="spinner diagonal part-1"></div>
                    <div class="spinner horizontal"></div>
                    <div class="spinner diagonale part-2"></div>
                </label>
                <div id="sidebarMenu">
                    <ul class="sidebarMenuInner">
                        <li><span>General</span></li>
                        <li><a></a><span>Usuario</span></li>
                        <li><a></a><span>Inventarios</span></li>
                        <li><a></a><span>General</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}