import React, { Component } from 'react';

class Cards extends Component {
    render(props) {
        //{id , name , email} = props;    Destructuring
        //instead of 'this.props.name' you write only 'name'
        //else write " {id , name , email} " instead of 'props' in "render(props)"
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={`https://robohash.org/${this.props.id}?200x200`} alt='robots' />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Cards;