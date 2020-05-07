import React from 'react';
import PropTypes from 'prop-types';
import GroupCard from './group_card';

export default class GroupColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            items: props.items 
        }
    }

    render() {
        var generateList = () => {
            var ll = [];
            for (let i in this.state.items) {
                ll.push(
                    <li>
                        <GroupCard item={this.state.items[i]} />
                    </li>
                );
            }
            return ll;
        }
        return (
            <div className="group-column">
                <div className="group-column-title">
                    {this.state.title}&nbsp;{this.state.items.length}
                </div>
                <ul className="group-column-body">
                    {generateList()}
                </ul>
            </div>
        );
    }
}

GroupColumn.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}

GroupColumn.defaultProps = {
    title: 'TO DO',
    items: [
        {
            word: 'hello',
            description: 'used as a greeting when you meet sb, when you answer the telephone or when you want to attract sb\'s attention',
            samples: ['Hello John, how are you?'],
            state: 0,
            category: 'CET-4',
            badge: 'primary',
            marks: ['done', 'up', 'flag']
        },
        {
            word: 'hi',
            description: 'used to say hello',
            samples: ['hi, how are you?'],
            state: 0,
            category: 'CET-4',
            badge: 'success',
            marks: ['up', 'flag']
        }
    ]
}