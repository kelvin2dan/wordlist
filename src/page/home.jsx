import React from 'react';
import GroupColumn from '../component/group_column';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mockData: [{
                title: 'To Do',
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
                        category: 'Basic',
                        badge: 'success',
                        marks: ['up', 'flag']
                    }
                ]
            },{
                title: 'In Progress',
                items: [
                    {
                        word: 'meteor',
                        description: 'a piece of rock from outer space that makes a bright line across the night sky as it burns up while falling through the earth\'s atmosphere',
                        samples: ['a meteor shower'],
                        state: 0,
                        category: 'IELTS',
                        badge: 'primary',
                        marks: ['up', 'flag']
                    }
                ]
            },{
                title: 'Review',
                items: [
                    {
                        word: 'friction',
                        description: 'the action of one object or surface moving against another',
                        samples: ['Friction between moving parts had caused the engine to overheat.'],
                        state: 0,
                        category: 'CET-6',
                        badge: 'danger',
                        marks: ['done', 'flag']
                    },
                    {
                        word: 'convey',
                        description: 'to make ideas, feelings, etc. known to sb',
                        samples: ['Colours like red convey a sense of energy and strength.'],
                        state: 0,
                        category: 'TOEFL',
                        badge: 'success',
                        marks: ['up', 'flag']
                    },
                    {
                        word: 'badge',
                        description: 'A badge is a piece of metal or cloth which you wear to show that you belong to an organization or support a cause. American English usually uses button to refer to a small round metal badge.',
                        samples: ['She glanced briefly at his lapel badge.'],
                        state: 0,
                        category: 'TOEFL',
                        badge: 'success',
                        marks: ['up', 'flag']
                    }
                ]
            },{
                title: 'Done',
                items: [
                    {
                        word: 'contextual',
                        description: 'A contextual issue or account relates to the context of something.',
                        samples: ['The writer builds up a clever contextual picture of upper class life.'],
                        state: 0,
                        category: 'CET-6',
                        badge: 'info',
                        marks: ['done', 'up', 'flag']
                    },
                    {
                        word: 'breadcrumb',
                        description: 'Breadcrumbs are tiny pieces of dry bread. They are used in cooking.',
                        samples: ['crumb of bread; used especially for coating or thickening'],
                        state: 0,
                        category: 'CET-4',
                        badge: 'success',
                        marks: ['up', 'flag']
                    }
                ]
            }]
        }
    }

    render() {
        const generateGroup = () => {
            let arr = [];
            for (let i in this.state.mockData) {
                arr.push(
                    <div className="col-3">
                        <GroupColumn title={this.state.mockData[i].title} items={this.state.mockData[i].items}/>
                    </div>
                );
            }
            return arr;
        }
        return (
            <div className="home-page">
                <div className="row">
                    <div className="col-12">
                        <h1>Board</h1>
                    </div>
                </div>
                <div className="row home-group">
                    {generateGroup()}
                </div>
            </div>
        );
    }
}

export default HomePage;