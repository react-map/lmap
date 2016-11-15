import React, { Component, PropTypes } from 'react';
import Nav from '../../../../components/Nav/Nav';

/**
 * @author sylvenas
 * @doc 交通节假日
 * @class Holiday
 * @extends {Component}
 */
class Holiday extends Component {

    componentWillMount() {
        console.log('Holiday')
    }

    render() {
        return (
            <div>
                <Nav parentUrl={'/trafficIndex'} parentName={'流量指数'}></Nav>
                <h1>Holiday</h1>
            </div>
        );
    }
    componentWillUnmount() {
        console.log('leave Holiday')
    }
    
}

Holiday.propTypes = {

};

export default Holiday;