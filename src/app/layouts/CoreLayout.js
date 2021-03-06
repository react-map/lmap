import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Map from '../components/map/Map';
import Search from '../components/search';
import Rbox from '../components/rbox';
import ToolBar from '../components/toolBar/ToolBar';
import Bucket from '../components/bucket/Bucket';

/**
 * @author sylvenas
 * @doc 页面容器,包含Map、Search、Rbox、ToolBar、Bucket
 * @class CoreLayout
 * @extends {Component}
 */
class CoreLayout extends Component {
    constructor(props) {
        super(props);
    }
    /**
     * @doc 阻止link导致的浏览器地址变化而引起的二次渲染
     * @param {object} nextProps
     * @param {object} nextState
     * @returns bool (ture 渲染，false不渲染)
     * @memberOf CoreLayout
     */
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.router.location.action === 'PUSH')
    }
    
    /**
     * @doc 添加根节点组件
     * @children->子路由所指向的右侧模块组件(必须)
     * @location->子路由的路由地址(必须)
     * @returns 全部的根组件集合
     * @memberOf CoreLayout
     */
    render() {
        const {children, location} = this.props;
        return (
            <div>
                <Map></Map>
                <Search></Search>
                <Rbox></Rbox>
                <ToolBar></ToolBar>
                <Bucket>
                    <ReactCSSTransitionGroup
                        id='bucket'
                        component="div"
                        transitionName='animation'
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {React.cloneElement(children, {
                            key: location.pathname
                        })}
                    </ReactCSSTransitionGroup>
                </Bucket>
            </div>
        )
    }
}

CoreLayout.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired
};

export default CoreLayout;