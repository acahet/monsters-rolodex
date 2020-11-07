import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
	state = {
		monsters: [],
		searchField: '',
	};
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				this.setState({ monsters: data });
			});
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox placeholder="Search Monsters" onChange={this.handleChange} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
