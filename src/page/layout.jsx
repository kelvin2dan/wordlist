import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchImg from '../assets/img/search.svg';
import PlusImg from '../assets/img/plus.svg';
import AvatarImg from '../assets/img/avatar.jpg';
import HomePage from './home';
import CircleImage from '../component/circle_image';
import MenuList from '../component/menu_list';
import AboutPage from './about';

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current_indx: props.current_indx
        }
    }
    
    currentIndexChange(newIndex) {
        this.setState({
            current_indx: newIndex
        });
    }

    render () {
        return (
            <div className="layout">
                <ul className="side-menu">
                    <li className={this.state.current_indx == 1 ? 'activate' : ''} onClick={() => this.currentIndexChange(1)}>
                        <img src={SearchImg}/>
                    </li>
                    <li className={this.state.current_indx == 2 ? 'activate' : ''} onClick={() => this.currentIndexChange(2)}>
                        <img src={PlusImg}/>
                    </li>
                </ul>
                <div className="side-main">
                    <ul className="main-nav">
                        <li className="under-line">
                            <div className="row">
                                <div className="col-3">
                                    <CircleImage imgSrc={AvatarImg} />
                                </div>
                                <div className="col-9 align-justify-center">
                                    <span className="h4">Kelvin</span>
                                    <span>Vocabulary Pack</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <MenuList />
                        </li>
                    </ul>
                    <div className="main-content">   
                        <Switch>      
                            <Route path="/" exact component={HomePage} />             
                            <Route path="/about" exact component={AboutPage} />                        
                        </Switch>  
                    </div>
                </div>
            </div>
        );
    };
};

Layout.propTypes = {
    current_indx: PropTypes.number
}

Layout.defaultProps = {
    current_indx: 1
}

export default Layout;