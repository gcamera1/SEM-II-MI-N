import React, { Component } from 'react';
import { removeStorage } from '../common/storage';

class Sidebar extends Component {

    goTo(route) {
        return this.props.history.push(route);
    }

    isActive(path) {
        return (this.props.location.pathname === path);
    }

    logout() {
        removeStorage('session');
        return this.props.history.push('/');
    }

    render() {
        return (
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <ul className="sidebar-nav nav">
                        <li className="sidebar-brand">
                            <a href="#home"><span className="fa fa-home solo">Home</span></a>
                        </li>
                        <li>
                            <a href="#anch1">
                                <span className="fa fa-anchor solo">Anchor 1</span>
                            </a>
                        </li>
                        <li>
                            <a href="#anch2">
                                <span className="fa fa-anchor solo">Anchor 2</span>
                            </a>
                        </li>
                        <li>
                            <a href="#anch3">
                                <span className="fa fa-anchor solo">Anchor 3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#anch4">
                                <span className="fa fa-anchor solo">Anchor 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;
