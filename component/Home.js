import React from 'react'
import $ from 'jquery'

import ProductList from './ProductList'

const Home = React.createClass({

	// 组建挂载初始化值
	getInitialState(){
		return {
			data:[
				{"id":10}
			]
		}
	},

	// 事件
	handleClick() {
		// alert(1);
		console.log($);
	},


	// 渲染完成
	componentDidMount(){
		console.log('componentDidMount');
		$.ajax({
			url: 'json/home.json',
			dataType: 'json',
			success: function(data){
				console.log(data);
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
      		}.bind(this)
		});


	},

	render() {
		return (
			<div className="home-content" >
				<img src="/img/logo.png" alert="img" width="95%" onClick={this.handleClick}/>

		 		<ProductList data={this.state.data}/>

		 	</div>
		)
	}

})


export default Home