import React, { Component } from 'react';

class WithLoader extends Component {
    render() {
        return <div>
            {this.props.isLoading ? '' : this.props.render()}
            {this.props.isLoading ? <div className="loader"></div> : '' }
        </div>;
    }
}

export default WithLoader;