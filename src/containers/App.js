import './App.css';
import React from 'react';
import 'tachyons'
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({robots:users}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })
    if (!this.state.robots.length) {
      return <h1>loading</h1>
    } else{
      return (
        <div className='tc'>
          <h1 className='main-header f1'>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              < CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
        
      );
    }
    
  }

}

export default App;
