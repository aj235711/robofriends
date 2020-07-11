import React, { Component } from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	} 
	
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(user => user.name.toLowerCase().includes(searchfield.toLowerCase()));
		if(!robots.length) {
			return <h1>LOADING</h1>
		}
		else {
			return (
				<div className = "tc">
					<h1 style = {{fontSize: '4.5vh'}}>ROBOFRIENDS</h1>
					<Searchbox change = {this.onSearchChange}/>
					<Scroll>
						<Cardlist robots = {filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;