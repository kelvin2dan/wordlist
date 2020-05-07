import React from 'react';
import PropTypes from 'prop-types';
import DoneIcon from '../assets/img/done.svg';
import UpIcon from '../assets/img/up.svg';
import FlagIcon from '../assets/img/flag.svg';

export default class GroupCard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        const badgeCls = () => {
            let str = 'badge badge-';
            str += this.props.item.badge;
            return str;
        }
        const marksDom = () => {
            let arr = [];
            for (let i in this.props.item.marks) {
                switch (this.props.item.marks[i]){
                    case 'done':
                        arr.push(
                            <img src={DoneIcon} className="mini-icon-img-size" />
                        );
                        break;
                    case 'up':
                        arr.push(
                            <img src={UpIcon} className="mini-icon-img-size" />
                        );
                        break;
                    case 'flag':
                        arr.push(
                            <img src={FlagIcon} className="mini-icon-img-size" />
                        );
                        break;
                    default:
                        break;
                }                
            }
            return arr;
        }
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        {this.props.item.word}
                    </div>
                    <div className="card-subtitle text-muted">
                        {this.props.item.description}
                    </div>
                    <div>
                        <span class={badgeCls()}>
                            {this.props.item.category}
                        </span>
                    </div>
                    <div className="row justify-content-between group_card_footer">
                        <div className="col-6">
                            <div className="row row-align-center-justify-left">
                                {marksDom()}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row align-justify-center">
                                <span class="badge badge-light">{this.props.item.state}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

GroupCard.propTypes = {
    item: PropTypes.object
}