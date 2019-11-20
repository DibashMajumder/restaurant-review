import React from 'react';
import { Header, Footer, Container } from './components';
import { REFUSED } from 'dns';

class HomePage extends React.Component {
	state = {
		cityId: 280
	};

	handleCity = (id) => this.setState({ cityId: id });

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Header title="Food Lover" />
				<Container cityId={this.state.cityId} handleCity={this.handleCity} />
				<Footer />
			</div>
		);
	}
}

export default HomePage;
