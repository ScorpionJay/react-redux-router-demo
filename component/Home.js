import React from 'react'

const Home = React.createClass({

	// 初始化数据
	getInitialState(){
		return {data:{
			name: 'jay'
		}}
	},

	// 事件
	handleClick() {
		alert(1);
	},


	render() {
		return <div className="home-content" onClick={this.handleClick}> Welcome to the app! {this.state.data.name}</div>
	}

})


export default Home