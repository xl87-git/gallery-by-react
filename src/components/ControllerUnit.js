
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


//控制组件
class ControllerUnit extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.stopPropagation();
		e.preventDefault();
		//如果选中图片是居中的，则翻转图片；如果不是居中的，则将其居中
		if(this.props.arrange.isCenter){
			this.props.inverse();
		}else{
			this.props.center();
		}
	}

	render(){
		var controllerUnitClassName = 'controller-unit';

		//如果是居中的图片，显示居中状态
		if(this.props.arrange.isCenter){
			controllerUnitClassName += ' is-center';
		}

		//如果是翻转图片，显示翻转状态
		if(this.props.arrange.isInverse){
			controllerUnitClassName += ' is-inverse';
		}

		return (
			<span className={controllerUnitClassName} onClick={this.handleClick}></span>
		);
	}
}

export default ControllerUnit;