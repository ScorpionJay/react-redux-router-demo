# Demo


##　[路由](https://github.com/reactjs/react-router)


## 样式分离
http://webpack.github.io/docs/stylesheets.html
npm install extract-text-webpack-plugin --save


## [nav active](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links) 有问题


## 需要整合redux


## [生命周期](http://reactjs.cn/react/docs/component-specs.html)

## [箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arrow_functions)


## 传值问题
		class User extends Component {
		  render() {
		    const { userID } = this.props.params

		    return (
		      <div className="User">
		        <h1>User id: {userID}</h1>
		        <ul>
		          <li><Link to={`/user/${userID}/tasks/foo`} activeClassName="active">foo task</Link></li>
		          <li><Link to={`/user/${userID}/tasks/bar`} activeClassName="active">bar task</Link></li>
		        </ul>
		        {this.props.children}
		      </div>
		    )
		  }
		}

没用在上层做了处理

## es6 字符串模块 解决上一个问题
坑死人

let name = 'react'
console.log(`my name is ${name}`)

` 不是'  一个是左上角的~下面的键 没看清弄成了单引号


## [webpack url-loader](https://github.com/webpack/url-loader)

file-loader ???

## [slider](https://github.com/TongchengQiu/react-slider)