import React, { Component, PropTypes } from 'react';

import { IndexLink, Link } from 'react-router';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import style from './home.css';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        position: 'absolute',
        width: '100%'
    },
    gridList: {
        width: 300,
        height: 500,
        overflowY: 'auto',
        cursor: 'pointer'
    },
    home: {
        color: '#44bbd0'
    }
};

const tilesData = [
    {
        img: 'img/08.jpg',
        title: '信号监控',
        route: '/signal',
    },
    {
        img: 'img/07.jpg',
        title: '指数流量',
        route: '/trafficIndex',
    },
    {
        img: 'img/03.jpg',
        title: '电警卡口',
        route: '/counter',
    },
    {
        img: 'img/04.jpg',
        title: '诱导发布',
        route: 'fancycrave1',
    },
    {
        img: 'img/05.jpg',
        title: '基本配置',
        route: 'Hans',
    },
    {
        img: 'img/06.jpg',
        title: '视频监控',
        route: 'fancycrave',
    },
    {
        img: 'img/07.jpg',
        title: '大数据',
        route: 'jill111',
    },
    {
        img: 'img/08.jpg',
        title: '设备运维',
        route: 'BkrmadtyaKarki',
    },
];

/**
 * @author sylvenas
 * @doc 右侧功能模块主页面，展示全部的功能模块概览
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
    /**
     * @returns 右侧收缩面板主页面
     * @memberOf Home
     */
    render() {
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={100}
                    style={styles.gridList}
                    >
                    <Subheader>
                        <div style={styles.home}>首页</div>
                    </Subheader>
                    {tilesData.map((tile) => (
                        <Link to={tile.route} key={tile.route}>
                            <GridTile
                                title={<div className={style.title}>{tile.title}</div>}
                                titlePosition="bottom"
                                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
                                <img src={tile.img} className={style.imgs} />
                            </GridTile>
                        </Link>
                    ))}
                </GridList>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;