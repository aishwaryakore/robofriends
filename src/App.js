import React, { useEffect, useState } from 'react';
import CardLists from './CardLists.js';
//import { robots } from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'
import './App.css';

function App() {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').
    //         then(response => response.json())
    //         .then(users => this.setState({ robots: users }));

    // }

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { setRobots(users) });
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);

    }

    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (robots.length === 0) {
        return <h1>Loading</h1>
    }
    else {
        return (
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardLists robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }


}
export default App;