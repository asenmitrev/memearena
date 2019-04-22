import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SideMenu extends Component {
    render() {
        return (
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                direction='right'
                inverted
                vertical
                visible={this.props.ui.sideMenuOpen}
                width='thin'
                className='side-menu'
            >
                <Menu.Item as={Link} to='/'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as={Link} to='/duel'>
                    <Icon name='gamepad' />
                    Duel
                </Menu.Item>
                <Menu.Item as={Link} to='/upload'>
                    <Icon name='camera' />
                    Upload
                </Menu.Item>
            </Sidebar>
        );
    }
}

function mapStateToProps(state){
    return { 
        ui: state.ui
    };
}

export default connect(mapStateToProps)(SideMenu);
