import React from 'react';
import MenuItem from './menu_item';
import ListIcon from '../assets/img/list.svg';
import QuestionIcon from '../assets/img/question.svg';

class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 1
        };
    }

    currentIndexChange(newIndex) {
        this.setState({
            currentIndex: newIndex
        });        
    }

    render() {
        return (
            <ul>
                <li className={this.state.currentIndex == 1 ? 'menu-activate' : ''} onClick={()=> this.currentIndexChange(1)}>
                    <MenuItem icon={ListIcon} title="Board" href="/"/>
                </li>
                <li className={this.state.currentIndex == 2 ? 'menu-activate' : ''} onClick={()=> this.currentIndexChange(2)}>
                    <MenuItem icon={QuestionIcon} title="About" href="/about"/>
                </li>
            </ul>
        )
    }
}

export default MenuList;