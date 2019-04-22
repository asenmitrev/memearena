import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { toggleSideMenu } from '../actions';
import '../styles/components/Header.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
    onMenuClick() {
        this.props.dispatch(toggleSideMenu());
    }
    render() {
        return (
            <div className="header__container row row--no-margin middle-xs between-xs">
                <Link to="/"><span className="header__logo">Meme Arena</span></Link>
                <div className={"header__menu clickable " + (this.props.ui.sideMenuOpen ? 'header__menu--active' : '')} onClick={(e) => this.onMenuClick()}>
                    <Icon name='bars' size='large' color="grey" inverted className="header__menu-icon"/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { 
        ui: state.ui
    };
}

export default connect(mapStateToProps)(Header);
