require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


class ImgFigure extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	/*
	imgFigure 点击处理函数
	 */
	handleClick(e){
		e.stopPropagation();
		e.preventDefault();

		if(this.props.arrange.isCenter){
			this.props.inverse();
		}else{
			this.props.center();
		}
	}


	render(){

		var styleObj = {};

		//如果props属性中指定了这张图片的位置，则使用
		if(this.props.arrange.pos){
			styleObj = this.props.arrange.pos;
		}

		//如果图片的旋转角度有值且不为空，添加旋转角度
		if(this.props.arrange.rotate){
			
			(['Moz','Ms','Webkit','']).forEach((value)=>{
				styleObj[value + 'Transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
			});
		}

		if(this.props.arrange.isCenter){
			styleObj.zIndex = 11;
		}

		var imgFigureClassName = 'img-figure';
		imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';

		return (
			<figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
				<img src={this.props.data.imageURL}
				 alt ={this.props.data.title} />
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
					 <div className='img-back' onClick={this.handleClick}>
					 	{this.props.data.desc}
					 </div>
				</figcaption>
			</figure>
		);
	}
}

export default ImgFigure;