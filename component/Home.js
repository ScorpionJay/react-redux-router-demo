import React from 'react'

const Home = React.createClass({

	handleClick() {
		alert(1);
	},


	render() {
		return <div className="home-content" onClick={this.handleClick}> Welcome to the app!</div>
	}

})


export default Home