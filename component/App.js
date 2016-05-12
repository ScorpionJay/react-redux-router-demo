import React from 'react'
import { Router, IndexRoute ,Route, hashHistory,Link,Redirect } from 'react-router'

import Dashboard from './Dashboard'
import About from './About'
import Inbox from './Inbox'
import Message from './Message'


/* App */
const App = React.createClass({
	render: function(){
		return (
			<div className="nav">
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/inbox">inbox</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
})

/* routes */
const Routes = {
	path: '/',
	component: App,
	indexRoute :{component: Dashboard},
	childRoutes: [
		{ path: 'about', component: About},
		{
			path: 'inbox',
			component: Inbox,
			childRoutes : [{
				path: 'messages/:id',
				onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
			}]
		},
		{
			component: Inbox,
			childRoutes: [{
				path: 'messages/:id',component:Message
			}]
		}
	]
}


export default Routes